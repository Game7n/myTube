package ru.m1rox.mytube.servlets;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import ru.m1rox.mytube.http.responses.Videos;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.UUID;

@WebServlet("/api/mainPage")
@MultipartConfig(location = "C:\\Users\\Nikita\\nginx\\nginx-1.22.1\\MyTube\\videos")
public class mainPageServlet extends HttpServlet {

  @Override
  protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    System.out.println("--options--");
  }
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    System.out.println("--get--");

    System.out.println(req.getParameter("v"));

    if(req.getParameter("v") != null) {
      File video = new File("C:\\Users\\Nikita\\nginx\\nginx-1.22.1\\MyTube\\videos\\" + req.getParameter("v"));

      resp.getWriter().write("{\"response\":\"http://localhost:80/videos/" + req.getParameter("v") + "\"}");
    }else {
      File dir = new File("C:\\Users\\Nikita\\nginx\\nginx-1.22.1\\MyTube\\videos");
      String[] files = dir.list();

      Videos videos = new Videos();

      if(files != null){

        for (int i = 0; i < files.length; i++) {
          files[i] = "http://localhost:80/videos/" + files[i];

          System.out.println(files[i]);
        }

        videos.setVideos(Arrays.asList(files));
      }

      resp.getWriter().write(new Gson().toJson(videos));
    }

  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    System.out.println("--post--");

    Part part = req.getPart("video");
    part.write(UUID.randomUUID() + part.getSubmittedFileName());
    System.out.println(part.getContentType());

    resp.getWriter().write("123");
    resp.getWriter().close();
  }
}
