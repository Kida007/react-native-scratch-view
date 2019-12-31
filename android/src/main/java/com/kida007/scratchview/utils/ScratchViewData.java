package com.kida007.scratchview.utils;

public class ScratchViewData {

    public int height;
    public int width;
    public String uri;
    public int spotRadius;
    public float autoRevealPercentage;

    ScratchViewData(int height, int width, String uri, int spotRadius, float autoRevealPercentage){
        this.height = height;
        this.width = width;
        this.uri = uri;
        this.spotRadius = spotRadius;
        this.autoRevealPercentage  = autoRevealPercentage;
    }

}
