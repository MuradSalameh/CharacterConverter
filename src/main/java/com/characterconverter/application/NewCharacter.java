package com.characterconverter.application;

public class NewCharacter {

    private int age;
    private int newSt;
    private int newKo;
    private int newGr;
    private int newGe;
    private int newEr;
    private int newIn;
    private int newMa;
    private int nBi;
    private int nBw;

    public NewCharacter(int age, int newSt, int newKo, int newGr, int newGe, int newEr, int newIn, int newMa, int newBi, int newBw) {
        this.age = age;
        this.newSt = newSt;
        this.newKo = newKo;
        this.newGr = newGr;
        this.newGe = newGe;
        this.newEr = newEr;
        this.newIn = newIn;
        this.newMa = newMa;
        this.nBi = calcEdu(newBi);

        this.nBw = newBw;
    }

    private int calcEdu(int newBi) {
        int bi = 0;
        if(newBi >= 27){
            bi = 99;
        }else if ( newBi > 18){
            int diff = newBi - 18;
            bi = 90 + diff;
        } else{
            return newBi*5;
        }
        return bi;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getNewSt() {
        return newSt;
    }

    public void setNewSt(int newSt) {
        this.newSt = newSt;
    }

    public int getNewKo() {
        return newKo;
    }

    public void setNewKo(int newKo) {
        this.newKo = newKo;
    }

    public int getNewGr() {
        return newGr;
    }

    public void setNewGr(int newGr) {
        this.newGr = newGr;
    }

    public int getNewGe() {
        return newGe;
    }

    public void setNewGe(int newGe) {
        this.newGe = newGe;
    }

    public int getNewEr() {
        return newEr;
    }

    public void setNewEr(int newEr) {
        this.newEr = newEr;
    }

    public int getNewIn() {
        return newIn;
    }

    public void setNewIn(int newIn) {
        this.newIn = newIn;
    }

    public int getNewMa() {
        return newMa;
    }

    public void setNewMa(int newMa) {
        this.newMa = newMa;
    }

    public int getnBi() {
        return nBi;
    }

    public void setnBi(int nBi) {
        this.nBi = nBi;
    }

    public int getnBw() {
        return nBw;
    }

    public void setnBw(int nBw) {
        this.nBw = nBw;
    }

    @Override
    public String toString() {
        return "NewCharacter{" +
                "age=" + age +
                ", newSt=" + newSt +
                ", newKo=" + newKo +
                ", newGr=" + newGr +
                ", newGe=" + newGe +
                ", newEr=" + newEr +
                ", newIn=" + newIn +
                ", newMa=" + newMa +
                ", nBi=" + nBi +
                ", nBw=" + nBw +
                '}';
    }
}
