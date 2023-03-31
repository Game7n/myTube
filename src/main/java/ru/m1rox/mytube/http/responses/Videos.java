package ru.m1rox.mytube.http.responses;

import java.util.ArrayList;
import java.util.List;

public class Videos {


  List<String> names = new ArrayList<>();
  List<String> videos = new ArrayList<>();

  public void setVideos(List<String> videos) {
    this.videos = videos;
  }
}
