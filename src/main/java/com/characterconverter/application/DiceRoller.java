package com.characterconverter.application;

public class DiceRoller {
    int d1Roll;
    int d2Roll;
    int d3Roll;

    public DiceRoller() {
    }

    public String roll3W6(){
        int d1Roll = (int)(Math.random()*6+1);
        int d2Roll = (int)(Math.random()*6+1);
        int d3Roll = (int)(Math.random()*6+1);

        int sum = (d1Roll + d2Roll + d3Roll) * 5;

        //return "( W1: " + d1Roll + " + W2: " + d2Roll + " + W3: " + d3Roll + " ) *5 = " + sum;
        return "( W1: " + d1Roll + " + W2: " + d2Roll + " + W3: " + d3Roll + " ) *5 = " + sum;
    }

    public String roll2W6_6(){
        int d1Roll = (int)(Math.random()*6+1);
        int d2Roll = (int)(Math.random()*6+1);

        int sum = (d1Roll + d2Roll + 6) *5;

        return "( W1: " + d1Roll + " + W2: " + d2Roll + " + 6 ) *5 = " + sum;
    }

}
