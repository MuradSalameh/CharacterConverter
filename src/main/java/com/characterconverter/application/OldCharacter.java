package com.characterconverter.application;

import org.springframework.stereotype.Component;



//@Component
public class OldCharacter {


    private int age;
    private int oldSt;

    private int oldKo;

    private int oldGr;

    private int oldGe;

    private int oldEr;

    private int oldIn;

    private int oldMa;

    private int oldBi;

    private int oldBw;

    public OldCharacter(int age, int oldSt, int oldKo, int oldGr, int oldGe, int oldEr, int oldIn, int oldMa, int oldBi, int oldBw) {
        this.age = age;
        this.oldSt = oldSt;
        this.oldKo = oldKo;
        this.oldGr = oldGr;
        this.oldGe = oldGe;
        this.oldEr = oldEr;
        this.oldIn = oldIn;
        this.oldMa = oldMa;
        this.oldBi = oldBi;
        this.oldBw = oldBw;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getOldSt() {
        return oldSt;
    }

    public void setOldSt(int oldSt) {
        this.oldSt = oldSt;
    }

    public int getOldKo() {
        return oldKo;
    }

    public void setOldKo(int oldKo) {
        this.oldKo = oldKo;
    }

    public int getOldGr() {
        return oldGr;
    }

    public void setOldGr(int oldGr) {
        this.oldGr = oldGr;
    }

    public int getOldGe() {
        return oldGe;
    }

    public void setOldGe(int oldGe) {
        this.oldGe = oldGe;
    }

    public int getOldEr() {
        return oldEr;
    }

    public void setOldEr(int oldEr) {
        this.oldEr = oldEr;
    }

    public int getOldIn() {
        return oldIn;
    }

    public void setOldIn(int oldIn) {
        this.oldIn = oldIn;
    }

    public int getOldMa() {
        return oldMa;
    }

    public void setOldMa(int oldMa) {
        this.oldMa = oldMa;
    }

    public int getOldBi() {
        return oldBi;
    }

    public void setOldBi(int oldBi) {
        this.oldBi = oldBi;
    }

    public int getOldBw() {
        return oldBw;
    }

    public void setOldBw(int oldBw) {
        this.oldBw = oldBw;
    }

    @Override
    public String toString() {
        return "OldCharacter{" +
                "age=" + age +
                ", oldSt=" + oldSt +
                ", oldKo=" + oldKo +
                ", oldGr=" + oldGr +
                ", oldGe=" + oldGe +
                ", oldEr=" + oldEr +
                ", oldIn=" + oldIn +
                ", oldMa=" + oldMa +
                ", oldBi=" + oldBi +
                ", oldBw=" + oldBw +
                '}';
    }
}
