"use server";

import { supabase } from "./supabase/supabase";
import nodemailer from "nodemailer";

export async function get_all_projects() {
  const { data: projects, error } = await supabase.from("projects").select();

  if (error) {
    throw error.message;
  }

  return projects;
}

// Add Project

export async function add_project(formdata) {
  const title = formdata.get("title");
  const description = formdata.get("description");
  const url = formdata.get("url");
  const type = formdata.get("type");
  const github = formdata.get("github");
  const technologies = formdata.getAll("technologies[]");
  const image = formdata.get("image");

  const imageResult = await upload_image(image);

  const project = {
    title,
    description,
    url,
    type,
    technologies,
    github,
    imageUrl: imageResult.url,
    imagePath: imageResult.path,
  };

  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select()
    .single(); // 👈 يرجّع المشروع الجديد

  if (error) {
    console.log("upload error", error);
    throw new Error(error.message);
  }

  return data; // 👈 رجع المشروع
}

export async function upload_image(image) {
  if (!image || image.size === 0) return null;

  const filePath = `images/${Date.now()}_${image.name}`; // اسم فريد

  const { data, error } = await supabase.storage
    .from("projects")
    .upload(filePath, image);

  if (error) {
    console.log("upload error", error);
    throw error.message;
  }

  const { data: publicURL, error: urlError } = supabase.storage
    .from("projects")
    .getPublicUrl(filePath);

  if (urlError) {
    console.log("urlError", urlError);
    throw urlError.message;
  }

  return { url: publicURL.publicUrl, path: filePath };
}

// Delete Project

export async function delete_project(id) {
  const { data, error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id)
    .select(); // 👈 عشان نجيب بيانات المشروع المحذوف، نحتاج نستخدم select()

  if (error) {
    console.log("delete error", error);
    throw error.message;
  }

  const project = data?.[0];

  if (project?.imagePath) {
    await delete_image(project.imagePath);
  }
}

export async function delete_image(imagePath) {
  const { data, error } = await supabase.storage
    .from("projects")
    .remove([imagePath]);

  if (error) {
    console.log("delete image error", error);
    throw error.message;
  }

  return data;
}

// auth
export async function sign_in(password) {
  const email = "admin@mohayyad.site";

  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (user) {
    return {
      correct: true,
      error: null,
    };
  }

  throw new Error("Unknown error occurred");
}


// Send Email 
export async function send_email(formData) {
  const name = formData.name
  const email = formData.email
  const message = formData.message

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: "mohayyad2.0@gmail.com",
    subject: "Portfolio Contact Form Submission",
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return { success: true, message: "تم إرسال الإبلاغ بنجاح!" };
}
