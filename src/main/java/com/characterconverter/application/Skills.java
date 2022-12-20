package com.characterconverter.application;

public class Skills {
    private String skill6e5e;
    private int initialValue6e5e;
    private String skill7e;
    private int initialValue7e;

    public Skills(String skill6e5e, int initialValue6e5e, String skill7e, int initialValue7e) {
        this.skill6e5e = skill6e5e;
        this.initialValue6e5e = initialValue6e5e;
        this.skill7e = skill7e;
        this.initialValue7e = initialValue7e;
    }

    public String getSkill6e5e() {
        return skill6e5e;
    }

    public void setSkill6e5e(String skill6e5e) {
        this.skill6e5e = skill6e5e;
    }

    public int getInitialValue6e5e() {
        return initialValue6e5e;
    }

    public void setInitialValue6e5e(int initialValue6e5e) {
        this.initialValue6e5e = initialValue6e5e;
    }

    public String getSkill7e() {
        return skill7e;
    }

    public void setSkill7e(String skill7e) {
        this.skill7e = skill7e;
    }

    public int getInitialValue7e() {
        return initialValue7e;
    }

    public void setInitialValue7e(int initialValue7e) {
        this.initialValue7e = initialValue7e;
    }

    @Override
    public String toString() {
        return "Skills{" +
                "skill6e5e='" + skill6e5e + '\'' +
                ", initialValue6e5e=" + initialValue6e5e +
                ", skill7e='" + skill7e + '\'' +
                ", initialValue7e=" + initialValue7e +
                '}';
    }
}
