package com.characterconverter.application.views.list;

import com.characterconverter.application.NewCharacter;
import com.characterconverter.application.DiceRoller;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.shared.Tooltip;
import com.vaadin.flow.component.shared.TooltipConfiguration;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;

@PageTitle("Cthulhu Society Character Converter")
//@Route(value = "", layout = MainLayout.class)
@Route(value = "")

public class ListView extends Composite {
   
    private NewCharacter nc;
    private DiceRoller dr = new DiceRoller();

    private String age6E = "Das Mindestalter des characters ist BI/EDU+6. (optional):\n" +
            "- Pro 10 Jahre, welche auf das Mindestalter aufgeschlagen werden,\n" +
            "    wird jeweils 1 Punkt bei BI/EDU hinzugefügt. (+ jeweils 20 \n" +
            "    Berufspunkte.)\n" +
            "- Beginnend ab 50 Jahren müssen pro 10 Jahre (50, 60, 70, etc.) \n" +
            "    jeweils 1 Attributpunkt von ST/STR, KON/CON, GE/DEX oder \n" +
            "    ER/APP abgezogen werden. ";
    private String age15 =
            "15 bis 19 Jahre alt (optional):\n" + "\n" +
            "- 5 Punkte werden von ST und GR abgezogen.\n" +
            "- BI wird um 5 Punkte verringert.\n" +
            "- Glück wird zweimal gewürfelt und der höhere der beiden Werte\n"+
            "    verwendet.";
    private String age20 =
            "20 bis 39 Jahre alt (optional):\n" + "\n" +
            "- Eine Probe zur BI-Verbesserung";
    private String age40 =
            "40 bis 49 Jahre alt (optional):\n" + "\n" +
            "- Zwei Proben zur BI-Verbesserung\n" +
            "- ER wird um 5 Punkte vermindert\n" +
            "- BW wird um 1 Punkte vermindert\n" +
            "- 5 Punkte werden (in beliebiger Verteilung) von ST, KO und GE\n" +
            "    abgezogen";
    private String age50 =
            "50 bis 59 Jahre alt (optional):\n" + "\n" +
            "- Drei Proben zur BI-Verbesserung gemacht;\n" +
            "- BW wird um 2 Punkte vermindert\n" +
            "- 10 Punkte werden (in beliebiger Verteilung) von ST, KO und GE\n" +
            "    abgezogen" +
            "- ER wird um 10 Punkte vermindert.";
    private String age60 =
            "60 bis 69 Jahre alt (optional):\n" + "\n" +
            "- Vier Proben zur BI-Verbesserung;\n" +
            "- BW wird um 3 Punkte vermindert\n" +
            "- 20 Punkte werden (in beliebiger Verteilung) von ST, KO und GE\n" +
            "    abgezogen" +
            "- ER wird um 15 Punkte vermindert.";
    private String age70 =
            "70 bis 79 Jahre alt (optional):\n" + "\n" +
            "- Vier Proben zur BI-Verbesserung;\n" +
            "- BW wird um 4 Punkte vermindert\n" +
            "- 40 Punkte werden (in beliebiger Verteilung) von ST, KO und GE\n" +
            "    abgezogen" +
            "- ER wird um 20 Punkte vermindert.";
    private String age80 =
            "80 bis 89 Jahre alt (optional):\n" + "\n" +
            "- Vier Proben zur BI-Verbesserung;\n" +
            "- BW wird um 5 Punkte vermindert\n" +
            "- 80 Punkte werden (in beliebiger Verteilung) von ST, KO und GE\n" +
            "    abgezogen" +
            "- ER wird um 25 Punkte vermindert.";

    @Override
    protected Component initContent(){
        // Global delay configuration:
       // TooltipConfiguration.setDefaultFocusDelay(2000);
        TooltipConfiguration.setDefaultHoverDelay(2000);
        TooltipConfiguration.setDefaultHideDelay(0);

        Image ccLogoImg = new Image("images/characterConverterLogo.png", "Cthulhu Society Character DiceRoller");
ccLogoImg.setClassName("ccLogoImg");
        //
        // textAreas & textFields ---------------------------------------------------
        //
        //H1 communityNameH1 = new H1("Cthulhu Society");
        //communityNameH1.addClassName("communityNameH1");
        //H1 titleH1 = new H1("Character DiceRoller");
        //titleH1.addClassName("titleH1");

        TextArea siteDescription = new TextArea();

        siteDescription.setValue("Der Cthulhu Society Charakter Konverter befindet sich noch im Aufbau. Aktuell bietet er folgende Funktionen:\n\n" +
                "1. Konvertieren von CoC Charakteren von älteren Versionen auf die 7. Edition: \n" +
                "Dazu gibt man einfach die Attributwerte aus dem alten Charakterbogen in die " +
                "Felder unter '6E Charakter und früher' ein und klickt dann auf 'Konvertieren'. " +
                "Auf Basis der eingegebenen Attribute werden dann alle fehlenden Werte automatisch " +
                "berechnet und direkt konvertiert.\n\n" +
                "2. Anpassung und Neuberechnung der Werte in der 7. Edition:\n" +
                "Die Werte auf der rechten Seite unter '7E charakter' lassen sich unabhängig ändern " +
                "und durch Klick auf 'Aktualisieren' neu berechnen. Alle auf den Attributswerten " +
                "basierenden werte werden dann automatisch nach den Regeln der 7. Edition neu berechnet.\n\n" +
                "2. Weitere Funktionen, wie zB. JSON Exort für Foundry VTT oder Export als PDF Charakterbogen sind geplant.\n\n"+
                "Hinweis: Wenn man mit der Maus eine Weile auf einem der Felder bleibt, bekommt man zum jeweiligen " +
                "Feld zusätzliche Infos/Beschreibungen.");

        siteDescription.setReadOnly(true);
        siteDescription.setWidth("912px");

        Label footer = new Label("© Taikunon - Cthulhu Society Discord Server");

        TextField nameTfR = new TextField("Name/Name");
        nameTfR.setWidthFull();

        TextField nameTfL = new TextField("Name/Name");
        nameTfL.setWidthFull();
        nameTfL.setValueChangeMode(ValueChangeMode.EAGER);
        nameTfL.addValueChangeListener(event -> {
            String safe = Jsoup.clean(event.getValue(), Safelist.basic());
            nameTfR.setValue(safe);
        });

        nameTfR.setValueChangeMode(ValueChangeMode.EAGER);
        nameTfR.addValueChangeListener(event -> {
            String safe = Jsoup.clean(event.getValue(), Safelist.basic());
            nameTfL.setValue(safe);
        });

        //
        // Old Character fields -----------------------------------------------
        //

        H2 titleOld = new H2("6E Character");

        TextArea oldAgeText = new TextArea();
        oldAgeText.setValue(age6E);
        oldAgeText.setReadOnly(true);
        oldAgeText.setWidthFull();
        oldAgeText.setHeight("145px");
        oldAgeText.addClassName("oldAgeText");
        oldAgeText.setTooltipText("Je nach gewähltem Alter, gelten die jeweils hier aufgeführten Altersanpassungen." +"\n\n"+ "In diesem Konverter werden die Altersanpassungen nicht automatisch vorgenommen, sondern müssen bei Bedarf (z.B. bei Charaktererstellung) manuell angewendet werden.").withPosition(Tooltip.TooltipPosition.START_TOP);


        IntegerField oldAge = new IntegerField();
        oldAge.setLabel("Alter/Age (12+)");
        oldAge.setValue(30);
        oldAge.setHasControls(true);
        oldAge.setValueChangeMode(ValueChangeMode.ON_CHANGE);
        oldAge.setTooltipText("Jeder Spieler kann das Alter seines selbst wählen (theoretisch mögliches Mindestalter: 12). Entsprechend dem gewählten Alter können\n" +
                "noch verschiedene Anpassungen gemäß der unten aufgeführten Angaben manuell ausgeführt werden.").withPosition(Tooltip.TooltipPosition.START_TOP);
        oldAge.addValueChangeListener(event -> {

            // Limitierung min/max Alter Zahlenfeld
            if(event.getValue() < 12){
                oldAge.setValue(12);
            } else if(event.getValue() > 100){
                oldAge.setValue(100);
            }

            /*
            // Anzeige der passenden Regel nach Alter
            if(event.getValue() >= 15 && event.getValue() <= 19){
                oldAgeText.setValue(age15);
            } else if(event.getValue() >= 20 && event.getValue() <= 39) {
                oldAgeText.setValue(age20);
            } else if(event.getValue() >= 40 && event.getValue() <= 49){
                oldAgeText.setValue(age40);
            } else if (event.getValue() >= 50 && event.getValue() <= 59){
                oldAgeText.setValue(age50);
            }  else if (event.getValue() >= 60 && event.getValue() <= 69){
                oldAgeText.setValue(age60);
            }else if (event.getValue() >= 70 && event.getValue() <= 79){
                oldAgeText.setValue(age70);
            }else if (event.getValue() >= 80 && event.getValue() <= 89){
                oldAgeText.setValue(age80);
            }
             */
        });

        IntegerField oldSt = new IntegerField();
        oldSt.setLabel("ST/STR");
        oldSt.setValue(1);
        oldSt.setHasControls(true);
        oldSt.setMin(1);
        oldSt.setMax(100);
        oldSt.setTooltipText("Stärke (ST):\n" +
                "Rein physische Kraft.").withPosition(Tooltip.TooltipPosition.START_TOP);

        IntegerField oldKo = new IntegerField();
        oldKo.setLabel("KO/CON");
        oldKo.setValue(1);
        oldKo.setHasControls(true);
        oldKo.setMin(1);
        oldKo.setMax(100);
        oldKo.setTooltipText("Konstitution (KO):\n" +
                "Körperliche Gesundheit und Ausdauer.").withPosition(Tooltip.TooltipPosition.START_TOP);

        IntegerField oldGr = new IntegerField();
        oldGr.setLabel("GR/SIZ");
        oldGr.setValue(1);
        oldGr.setHasControls(true);
        oldGr.setMin(1);
        oldGr.setMax(100);
        oldGr.setTooltipText("Körpergröße (GR):\n" +
                "Kombination aus Größe und Gewicht.").withPosition(Tooltip.TooltipPosition.START_TOP);


        IntegerField oldGe = new IntegerField();
        oldGe.setLabel("GE/DEX");
        oldGe.setValue(1);
        oldGe.setHasControls(true);
        oldGe.setMin(1);
        oldGe.setMax(100);
        oldGe.setTooltipText("Geschicklichkeit (GE):\n" +
                "Gewandtheit und (Reaktions-)Geschwindigkeit.").withPosition(Tooltip.TooltipPosition.START_TOP);


        IntegerField oldEr = new IntegerField();
        oldEr.setLabel("ER/APP");
        oldEr.setValue(1);
        oldEr.setHasControls(true);
        oldEr.setMin(1);
        oldEr.setMax(100);
        oldEr.setTooltipText("Erscheinung (ER):\n" +
                "Körperliche Ausstrahlung und das Aussehen.").withPosition(Tooltip.TooltipPosition.START_TOP);


        IntegerField oldIn = new IntegerField();
        oldIn.setLabel("IN/INT");
        oldIn.setValue(1);
        oldIn.setHasControls(true);
        oldIn.setMin(1);
        oldIn.setMax(100);
        oldIn.setTooltipText("Intelligenz (IN):\n" +
                "Grobes Maß für die Gerissenheit und die Fähigkeit, Gedankensprünge zu machen.").withPosition(Tooltip.TooltipPosition.START_TOP);


        IntegerField oldMa = new IntegerField();
        oldMa.setLabel("MA/POW");
        oldMa.setValue(1);
        oldMa.setHasControls(true);
        oldMa.setMin(1);
        oldMa.setMax(100);
        oldMa.setTooltipText("Mana (MA):\n" +
                "Kombination aus der Willenskraft, dem Geist und der mentalen Stabilität").withPosition(Tooltip.TooltipPosition.START_TOP);



        IntegerField oldBi = new IntegerField();
        oldBi.setLabel("BI/EDU");
        oldBi.setValue(1);
        oldBi.setHasControls(true);
        oldBi.setMin(1);
        oldBi.setMax(100);
        oldBi.setTooltipText("Bildung (BI):\n" +
                "Wissen, das durch formelle Ausbildung oder die „harte Schule des Lebens erlangt wurde.").withPosition(Tooltip.TooltipPosition.START_TOP);

        IntegerField oldBw = new IntegerField();
        oldBw.setLabel("BW/Movement Rate");
        oldBw.setValue(8);
        oldBw.setHasControls(true);
        oldBw.setMin(1);
        oldBw.setMax(100);

        Label staOld = new Label("STA/SAN:");
        Label staOldCal = new Label(" ");
        Label spacer = new Label("  |  ");
        Label tpOld = new Label("TP/HP:");
        Label tpOldCal = new Label(" ");
        Label spacer2 = new Label("  |  ");
        Label sbOld = new Label("SB/DB:");
        Label sbOldCal = new Label(" ");

        // Schadensbonus / Damaga Bonus

        HorizontalLayout attRow0l = new HorizontalLayout(oldAge, nameTfL);
        attRow0l.setWidthFull();
        HorizontalLayout attRow0bl = new HorizontalLayout(oldAgeText);
        attRow0bl.setWidthFull();
        HorizontalLayout attRow1l = new HorizontalLayout(oldSt,oldGe,oldMa);
        HorizontalLayout attRow2l = new HorizontalLayout(oldKo,oldEr,oldBi);
        HorizontalLayout attRow3l = new HorizontalLayout(oldGr,oldIn,oldBw);
        HorizontalLayout attRow4l = new HorizontalLayout(staOld,staOldCal,spacer,tpOld,tpOldCal,spacer2,sbOld,sbOldCal);
        attRow4l.addClassName("hRow4l");

        //
        // New Character fields // ------------------------------------------------
        //

        H2 titleNew = new H2("7E Character");
       
        TextArea newAgeText = new TextArea();
        newAgeText.setValue(age20);
        newAgeText.setReadOnly(true);
        newAgeText.setWidthFull();
        newAgeText.setHeight("145px");
        newAgeText.addClassName("newAgeText");

        IntegerField newAge = new IntegerField();
        newAge.setLabel("Alter/Age (15-89)");
        newAge.setValue(30);
        newAge.setHasControls(true);
        newAge.setValueChangeMode(ValueChangeMode.ON_CHANGE);
        newAge.addValueChangeListener(event -> {
            // Limitierung min/max Alter Zahlenfeld
            if(event.getValue() < 15){
                newAge.setValue(15);
            } else if(event.getValue() > 89){
                newAge.setValue(89);
            }

            // Anzeige der passenden Regel nach Alter
            if(event.getValue() >= 15 && event.getValue() <= 19){
                newAgeText.setValue(age15);
            } else if(event.getValue() >= 20 && event.getValue() <= 39) {
                newAgeText.setValue(age20);
            } else if(event.getValue() >= 40 && event.getValue() <= 49){
                newAgeText.setValue(age40);
            } else if (event.getValue() >= 50 && event.getValue() <= 59){
                newAgeText.setValue(age50);
            }  else if (event.getValue() >= 60 && event.getValue() <= 69){
                newAgeText.setValue(age60);
            }else if (event.getValue() >= 70 && event.getValue() <= 79){
                newAgeText.setValue(age70);
            }else if (event.getValue() >= 80 && event.getValue() <= 89){
                newAgeText.setValue(age80);
            }
        });

        IntegerField newSt = new IntegerField();
        newSt.setLabel("ST/STR");
        newSt.setValue(1);
        newSt.setHasControls(true);
        newSt.setMin(1);
        newSt.setMax(100);

        IntegerField newKo = new IntegerField();
        newKo.setLabel("KO/CON");
        newKo.setValue(1);
        newKo.setHasControls(true);
        newKo.setMin(1);
        newKo.setMax(100);

        IntegerField newGr = new IntegerField();
        newGr.setLabel("GR/SIZ");
        newGr.setValue(1);
        newGr.setHasControls(true);
        newGr.setMin(1);
        newGr.setMax(100);

        IntegerField newGe = new IntegerField();
        newGe.setLabel("GE/DEX");
        newGe.setValue(1);
        newGe.setHasControls(true);
        newGe.setMin(1);
        newGe.setMax(100);

        IntegerField newEr = new IntegerField();
        newEr.setLabel("ER/APP");
        newEr.setValue(1);
        newEr.setHasControls(true);
        newEr.setMin(1);
        newEr.setMax(100);

        IntegerField newIn = new IntegerField();
        newIn.setLabel("IN/INT");
        newIn.setValue(1);
        newIn.setHasControls(true);
        newIn.setMin(1);
        newIn.setMax(100);

        IntegerField newMa = new IntegerField();
        newMa.setLabel("MA/POW");
        newMa.setValue(1);
        newMa.setHasControls(true);
        newMa.setMin(1);
        newMa.setMax(100);

        IntegerField newBi = new IntegerField();
        newBi.setLabel("BI/EDU");
        newBi.setValue(1);
        newBi.setHasControls(true);
        newBi.setMin(1);
        newBi.setMax(100);

        IntegerField newBw = new IntegerField();
        newBw.setLabel("BW/Movement Rate");
        newBw.setValue(1);
        newBw.setHasControls(true);
        newBw.setMin(1);
        newBw.setMax(100);

        Label staNew = new Label("STA/SAN:");
        Label staNewCal = new Label(" ");
        Label spacerR = new Label("|");
        Label tpNew = new Label("TP/HP:");
        Label tpNewCal = new Label(" ");
        Label spacerR2 = new Label("|");
        Label sbNew = new Label("SB/DB:");
        Label sbNewCal = new Label(" ");
        Label spacerR3 = new Label("|");
        Label staturNew = new Label("Statur/Build:");
        Label staturNewCal = new Label(" ");

        // Calc Schadensbonus / Damaga Bonus
        // Calc Statur / Build (7e only)

        //Calc finanzkraft/ credit rating (7e only)
            
        HorizontalLayout attRow0r = new HorizontalLayout(newAge, nameTfR);
        attRow0r.setWidthFull();
        HorizontalLayout attRow0br = new HorizontalLayout(newAgeText);
        attRow0br.setWidthFull();
        HorizontalLayout attRow1r = new HorizontalLayout(newSt,newGe,newMa);
        HorizontalLayout attRow2r = new HorizontalLayout(newKo,newEr,newBi);
        HorizontalLayout attRow3r = new HorizontalLayout(newGr,newIn,newBw);
        HorizontalLayout attRow4r = new HorizontalLayout(staNew,staNewCal,spacerR,tpNew,tpNewCal,spacerR2,sbNew,sbNewCal,spacerR3,staturNew,staturNewCal);
        attRow4r.addClassName("hRow4r");

        //
        //Buttons --------------------------------------------------------------------------------
        // left button row
        //

        Button convertBtn = new Button("Konvertieren");

        //Beim Click auf Convert button alle Werte der Felder sammeln und NewCharacter Objekt erstellen
        class ConvertButtonListener
                implements ComponentEventListener<ClickEvent<Button>> {
            @Override
            public void onComponentEvent(ClickEvent<Button> event) {

                int oAge = oldAge.getValue();
                int oSt = oldSt.getValue();
                int oKo = oldKo.getValue();
                int oGr = oldGr.getValue();
                int oGe = oldGe.getValue();
                int oEr = oldEr.getValue();
                int oIn = oldIn.getValue();
                int oMa = oldMa.getValue();
                int oBi = oldBi.getValue();
                int oBw = oldBw.getValue();

                //convert to 7E
                int coSt = oldSt.getValue()*5;
                int coKo = oldKo.getValue()*5;
                int coGr = oldGr.getValue()*5;
                int coGe = oldGe.getValue()*5;
                int coEr = oldEr.getValue()*5;
                int coIn = oldIn.getValue()*5;
                int coMa = oldMa.getValue()*5;
                int coBi = oldBi.getValue();


                // Calculate old STA/SAN
                staOldCal.setText(Integer.toString(oMa*5));

                //Calculate old SB/DB
                int oStGr = oSt + oGr;
                String oSb = "0";

                if(oStGr >= 2 && oStGr <= 12){
                    oSb = "-1W6";
                } else if (oStGr >= 13 && oStGr <= 16){
                    oSb = "-1W4";
                } else if (oStGr >= 17 && oStGr <= 24){
                    oSb = "0";
                } else if (oStGr >= 25 && oStGr <= 32){
                    oSb = "+1W4";
                }else if (oStGr >= 33 && oStGr <= 40){
                    oSb = "+1W6";
                }
                sbOldCal.setText(oSb);



                //Calculate old TP/HP
                double tpOldc = ((double) oKo + (double) oGr) / 2;
                tpOldCal.setText(String.valueOf((int) Math.ceil(tpOldc)));

                NewCharacter nc = new NewCharacter(oAge,coSt,coKo,coGr,coGe,coEr,coIn,coMa,coBi,oBw);

                newAge.setValue(nc.getAge());
                newSt.setValue(nc.getNewSt());
                newKo.setValue(nc.getNewKo());
                newGr.setValue(nc.getNewGr());
                newGe.setValue(nc.getNewGe());
                newEr.setValue(nc.getNewEr());
                newIn.setValue(nc.getNewIn());
                newMa.setValue(nc.getNewMa());
                newBi.setValue(nc.getnBi());


                // Calculate new STA/SAN
                staNewCal.setText(Integer.toString(newMa.getValue()*1));

                //Calculate new TP/HP
                int tpNew = (nc.getNewKo() + nc.getNewGr()) / 10;
                tpNewCal.setText(String.valueOf(tpNew));

                //Calculate Statur
                int StGr = nc.getNewSt() + nc.getNewGr();
                String nSb = "0";
                int nStatur = 0;

                if(StGr >=2 && StGr <= 64){
                    nSb = String.valueOf(-2);
                    nStatur = -2;
                } else if (StGr >=65 && StGr <= 84) {
                    nSb = String.valueOf(-1);
                    nStatur = -1;
                } else if (StGr >=85 && StGr <= 124) {
                    nSb = String.valueOf(0);
                    nStatur = 0;
                } else if(StGr >=125 && StGr <= 164) {
                    nSb = "+1W4";
                    nStatur = 1;
                } else if(StGr >=165 && StGr <= 204) {
                    nSb = "+1W6";
                    nStatur = 2;
                } else if(StGr >=205 && StGr <= 284) {
                    nSb = "+2W6";
                    nStatur = 3;
                } else if(StGr >=285 && StGr <= 364) {
                    nSb = "+3W6";
                    nStatur = 4;
                } else if(StGr >=365 && StGr <= 444) {
                    nSb = "+4W6";
                    nStatur = 5;
                } else if(StGr >=445 && StGr <= 524) {
                    nSb = "+5W6";
                    nStatur = 6;
                } else if(StGr >=525) {
                    int faktor = StGr / 80;
                    int rest = StGr % 80;
                    System.out.println("Faktor: " + faktor);
                    System.out.println("Rest: " + rest);
                    String nsbVar = String.valueOf(faktor-1);
                    int nstaturVar = faktor;

                    if(rest >= 1){
                        nsbVar = String.valueOf(faktor);
                        nstaturVar = faktor+1;
                    }

                    nSb = "+" + nsbVar + "W6";
                    nStatur = nstaturVar;
                    System.out.println("nsb: " + nSb);
                    System.out.println("nStatur: " + nStatur);

                }
                sbNewCal.setText(nSb);
                staturNewCal.setText(String.valueOf(nStatur));

                //calculate  NEW BW / movement rate
                if (nc.getNewSt() > nc.getNewGr() && nc.getNewGe() > nc.getNewGr()){
                    nc.setnBw(9);
                    newBw.setValue(nc.getnBw());
                } else if(nc.getNewGe() < nc.getNewGr() && nc.getNewSt() < nc.getNewGr()){
                    nc.setnBw(7);
                    newBw.setValue(nc.getnBw());
                } else if (nc.getNewSt() >= nc.getNewGr()
                        || nc.getNewGe() >= nc.getNewGr()
                        || nc.getNewSt() == nc.getNewGr()
                        && nc.getNewSt() == nc.getNewGe()){
                    nc.setnBw(8);
                    newBw.setValue(nc.getnBw());
                }
            }
        }
        convertBtn.addClickListener(new ConvertButtonListener());

        class RefreshButtonListener
                implements ComponentEventListener<ClickEvent<Button>> {
            @Override
            public void onComponentEvent(ClickEvent<Button> event) {

                int nAge = newAge.getValue();
                int nSt = newSt.getValue();
                int nKo = newKo.getValue();
                int nGr = newGr.getValue();
                int nGe = newGe.getValue();
                int nEr = newEr.getValue();
                int nIn = newIn.getValue();
                int nMa = newMa.getValue();
                int nBi = newBi.getValue();
                int nBw = newBw.getValue();
                
                NewCharacter nc = new NewCharacter(nAge, nSt, nKo, nGr, nGe, nEr, nIn, nMa, nBi, nBw);

                /*
                nc.setAge(newAge.getValue());
                nc.setNewSt(newSt.getValue());
                nc.setNewKo(newKo.getValue());
                nc.setNewGr(newGr.getValue());
                nc.setNewGe(newGe.getValue());
                nc.setNewEr(newEr.getValue());
                nc.setNewIn(newIn.getValue());
                nc.setNewMa(newMa.getValue());
                nc.setnBi(newBi.getValue());
                nc.setnBw(newBw.getValue());
                
                 */


                // Calculate new STA/SAN
                staNewCal.setText(Integer.toString(newMa.getValue()*1));

                //Calculate new TP/HP
                int tpNew = (nc.getNewKo() + nc.getNewGr()) / 10;
                tpNewCal.setText(String.valueOf(tpNew));

                //Calculate Statur
                int StGr = nc.getNewSt() + nc.getNewGr();
                String nSb = "0";
                int nStatur = 0;

                if(StGr >=2 && StGr <= 64){
                    nSb = String.valueOf(-2);
                    nStatur = -2;
                } else if (StGr >=65 && StGr <= 84) {
                    nSb = String.valueOf(-1);
                    nStatur = -1;
                } else if (StGr >=85 && StGr <= 124) {
                    nSb = String.valueOf(0);
                    nStatur = 0;
                } else if(StGr >=125 && StGr <= 164) {
                    nSb = "+1W4";
                    nStatur = 1;
                } else if(StGr >=165 && StGr <= 204) {
                    nSb = "+1W6";
                    nStatur = 2;
                } else if(StGr >=205 && StGr <= 284) {
                    nSb = "+2W6";
                    nStatur = 3;
                } else if(StGr >=285 && StGr <= 364) {
                    nSb = "+3W6";
                    nStatur = 4;
                } else if(StGr >=365 && StGr <= 444) {
                    nSb = "+4W6";
                    nStatur = 5;
                } else if(StGr >=445 && StGr <= 524) {
                    nSb = "+5W6";
                    nStatur = 6;
                } else if(StGr >=525) {
                    int faktor = StGr / 80;
                    int rest = StGr % 80;
                    System.out.println("Faktor: " + faktor);
                    System.out.println("Rest: " + rest);
                    String nsbVar = String.valueOf(faktor-1);
                    int nstaturVar = faktor;


                    if(rest >= 1){
                        nsbVar = String.valueOf(faktor);
                        nstaturVar = faktor+1;
                    }

                    nSb = "+" + nsbVar + "W6";
                    nStatur = nstaturVar;
                    System.out.println("nsb: " + nSb);
                    System.out.println("nStatur: " + nStatur);
                }
                sbNewCal.setText(nSb);
                staturNewCal.setText(String.valueOf(nStatur));


                //calculate  NEW BW / movement rate
                if (nc.getNewSt() > nc.getNewGr() && nc.getNewGe() > nc.getNewGr()){
                    nc.setnBw(9);
                    newBw.setValue(nc.getnBw());
                } else if(nc.getNewGe() < nc.getNewGr() && nc.getNewSt() < nc.getNewGr()){
                    nc.setnBw(7);
                    newBw.setValue(nc.getnBw());
                } else if (nc.getNewSt() >= nc.getNewGr()
                        || nc.getNewGe() >= nc.getNewGr()
                        || nc.getNewSt() == nc.getNewGr()
                        && nc.getNewSt() == nc.getNewGe()){
                    nc.setnBw(8);
                    newBw.setValue(nc.getnBw());
                }

            }
        }
        

        //
        // right button row ---------------------------------------------------------------------------------------
        //

        Button refreshBtn = new Button("Aktualisieren");
        refreshBtn.addClickListener(new RefreshButtonListener());
       // Button export = new Button("Exportieren");

        //
        // additional informations and tables -------------------------------------------------------------------
        //

        // Skill Tabelle
        /*
        H2 titleSkillTable = new H2("Fertigkeitenpool / Skill Table");

        List<Skills> skillsList = Arrays.asList(
                new Skills("-", 10, "Charme", 10),
                new Skills("-", 10, "Einschüchtern", 10),
                new Skills("-", 10, "Überlebenskunst", 10),
                new Skills("-", 10, "Werte schätzen", 10),
                new Skills("Gewehr", 25, "Fernkampf (Gewehr/Flinte)", 10),
                new Skills("Schrotflinte", 30, "Fernkampf (Gewehr/Flinte)", 10),
                new Skills("Ansehen", 10, "Finanzkraft", 10),
                new Skills("Fotografie", 10, "Handwerk/Kunst (Fotografie)", 10),
                new Skills("Ideenwurf", 10, "Ideenwurf [selten]", 10),
                new Skills("Ideenwurf", 10, "Intelligenzprobe", 10),
                new Skills("Tarnen", 10, "Kaschieren", 10),
                new Skills("Taschendiebstahl", 10, "Kaschieren", 10),
                new Skills("Faustschlag", 10, "Nahkampf (Handgemenge)", 10),
                new Skills("Fußtritt", 10, "Nahkampf (Handgemenge)", 10),
                new Skills("Kopfstoß", 10, "Nahkampf (Handgemenge)", 10),
                new Skills("Ringen", 10, "Nahkampf (Handgemenge)", 10),
                new Skills("Kampfsportart", 10, "Nahkampf (Handgemenge)", 10),
                new Skills("Messer", 10, "Nahkampf (Handgemenge)", 10),
                new Skills("Astronomie", 10, "Naturwissenschaft (Astronomie)", 10),
                new Skills("Biologie", 10, "Naturwissenschaft (Biologie)", 10),
                new Skills("Chemie", 10, "Naturwissenschaft (Chemie)", 10),
                new Skills("Geologie", 10, "Naturwissenschaft (Geologie)", 10),
                new Skills("Pharmazie", 10, "Naturwissenschaft (Pharmazie)", 10),
                new Skills("Physik", 10, "Naturwissenschaft (Physik)", 10),
                new Skills("Feilschen", 10, "Überzeugen", 10),
                new Skills("Schleichen", 10, "Verborgen bleiben", 10),
                new Skills("Verbergen", 10, "Verborgen bleiben", 10),
                new Skills("Old", 10, "New", 10));

        Grid<Skills> skillsTable = new Grid<>(Skills.class, false);
        skillsTable.setWidth("912px");
        skillsTable.setHeight(String.valueOf(57 + skillsList.size()* 36) + "px");
        skillsTable.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
        skillsTable.setItems(skillsList);

        skillsTable.addColumn(Skills::getSkill6e5e).setHeader("6E").setFlexGrow(1);
        skillsTable.addColumn(Skills::getInitialValue6e5e).setHeader("Initialwert").setWidth("200px").setFlexGrow(1);
        skillsTable.addColumn(Skills::getSkill7e).setHeader("7E").setWidth("200px").setFlexGrow(1);
        skillsTable.addColumn(Skills::getInitialValue7e).setHeader("Initialwert").setFlexGrow(1);
        */

        HorizontalLayout leftButtonRow = new HorizontalLayout(convertBtn);
        HorizontalLayout rightButtonRow = new HorizontalLayout(refreshBtn);

        VerticalLayout subLeftV = new VerticalLayout(titleOld,attRow0l,attRow0bl,attRow1l,attRow2l,attRow3l,attRow4l,leftButtonRow);
        VerticalLayout subRightV = new VerticalLayout(titleNew,attRow0r,attRow0br,attRow1r,attRow2r,attRow3r, attRow4r,rightButtonRow);
        HorizontalLayout charForms = new HorizontalLayout(subLeftV,subRightV);

        // Würfeltabellen
        // Tabelle 6E


        //Tabelle 7E
        H2 wuerfelTitle = new H2("Würfe zur Charaktererstellung (7E)");
        Label wuerfelAnleitung = new Label("Zum würfeln einfach auf das Würfelicon klicken");

        //Wurflabels
        Label nStrW = new Label("Stärke (ST)\n3W6*5");
        Label nKoW = new Label("Konstitution (KO)\n3W6*5");
        Label nGrW = new Label("Körpergröße (GR)\n(2W6+6)*5");
        Label nGeW = new Label("Geschicklichkeit (GE)\n3W6*5");
        Label nErW = new Label("Erscheinung (ER)\n3W6*5");
        Label nInW = new Label("Intelligenz (IN)\n(2W6+6)*5");
        Label nMaW = new Label("Mana (MA)\n3W6*5");
        Label nBiW = new Label("Bildung (BI)\n(2W6+6)*5");
        Label nGlW = new Label("Glück\n3W6*5");
        
        String setWuerfelLabelwidth = "210px";
        nStrW.setWidth(setWuerfelLabelwidth);
        nKoW.setWidth(setWuerfelLabelwidth);
        nGrW.setWidth(setWuerfelLabelwidth);
        nGeW.setWidth(setWuerfelLabelwidth);
        nErW.setWidth(setWuerfelLabelwidth);
        nInW.setWidth(setWuerfelLabelwidth);
        nMaW.setWidth(setWuerfelLabelwidth);
        nBiW.setWidth(setWuerfelLabelwidth);
        nGlW.setWidth(setWuerfelLabelwidth);

        //Wurfergebnisse
        Label nStrWRes = new Label("");
        Label nKoWRes = new Label("");
        Label nGrWRes = new Label("");
        Label nGeWRes = new Label("");
        Label nErWRes = new Label("");
        Label nInWRes = new Label("");
        Label nMaWRes = new Label("");
        Label nBiWRes = new Label("");
        Label nGlWRes = new Label("");

        String wWidth = "250px";
        nStrWRes.setWidth(wWidth);
        nKoWRes.setWidth(wWidth);
        nGrWRes.setWidth(wWidth);
        nGeWRes.setWidth(wWidth);
        nErWRes.setWidth(wWidth);
        nInWRes.setWidth(wWidth);
        nMaWRes.setWidth(wWidth);
        nBiWRes.setWidth(wWidth);
        nGlWRes.setWidth(wWidth);


        //Ergebnbisfelder
        
        
        
        IntegerField e1 = new IntegerField();
        e1.setValue(1);
        IntegerField e2 = new IntegerField();
        e2.setValue(1);
        IntegerField e3 = new IntegerField();
        e3.setValue(1);
        IntegerField e4 = new IntegerField();
        e4.setValue(1);
        IntegerField e5 = new IntegerField();
        e5.setValue(1);
        IntegerField e6 = new IntegerField();
        e6.setValue(1);
        IntegerField e7 = new IntegerField();
        e7.setValue(1);
        IntegerField e8 = new IntegerField();
        e8.setValue(1);
        IntegerField e9 = new IntegerField();
        e9.setValue(1);
        
        
        String tfWidth = "50px";
        e1.setWidth(tfWidth);
        e2.setWidth(tfWidth);
        e3.setWidth(tfWidth);
        e4.setWidth(tfWidth);
        e5.setWidth(tfWidth);
        e6.setWidth(tfWidth);
        e7.setWidth(tfWidth);
        e8.setWidth(tfWidth);
        e9.setWidth(tfWidth);



       // nStrWRes.setWidthFull();
        String imgSrc = "images/dice_30px.png";
        //Würfelbuttons

        String result;
        Button nStRoll = new Button(new Image(imgSrc, "Würfel"));
        nStRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nStRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll3W6();
            nStrWRes.setText(s.substring(0,28));
            e1.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });
        
        Button nKoRoll = new Button(new Image(imgSrc, "Würfel"));
        nKoRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nKoRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll3W6();
            nKoWRes.setText(s.substring(0,28));
            e2.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });

Button nGrRoll = new Button(new Image(imgSrc, "Würfel"));
        nGrRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nGrRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll2W6_6();
            nGrWRes.setText(s.substring(0,24));
            e3.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });

        Button nGeRoll = new Button(new Image(imgSrc, "Würfel"));
        nGeRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nGeRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll3W6();
            nGeWRes.setText(s.substring(0,28));
            e4.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });

        Button nErRoll = new Button(new Image(imgSrc, "Würfel"));
        nErRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nErRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll3W6();
            nErWRes.setText(s.substring(0,28));
            e5.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });

        Button nInRoll = new Button(new Image(imgSrc, "Würfel"));
        nInRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nInRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll2W6_6();
            nInWRes.setText(s.substring(0,24));
            e6.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });

Button nMaRoll = new Button(new Image(imgSrc, "Würfel"));
        nMaRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nMaRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll3W6();
            nMaWRes.setText(s.substring(0,28));
            e7.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });

Button nBiRoll = new Button(new Image(imgSrc, "Würfel"));
        nBiRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nBiRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll2W6_6();
            nBiWRes.setText(s.substring(0,24));
            e8.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });

Button nGlRoll = new Button(new Image(imgSrc, "Würfel"));
        nGlRoll.addThemeVariants(ButtonVariant.LUMO_ICON);
        nGlRoll.addClickListener(buttonClickEvent -> {
            String s = dr.roll3W6();
            nGlWRes.setText(s.substring(0,28));
            e9.setValue(Integer.valueOf(s.substring(s.lastIndexOf(" ") + 1)));
        });


        //7E Reihen
        HorizontalLayout w1n = new HorizontalLayout(nStRoll,nStrW,nStrWRes,e1);
        w1n.setAlignItems(FlexComponent.Alignment.CENTER);
        HorizontalLayout w2n = new HorizontalLayout(nKoRoll,nKoW,nKoWRes,e2);
        w2n.setAlignItems(FlexComponent.Alignment.CENTER);
        HorizontalLayout w3n = new HorizontalLayout(nGrRoll,nGrW,nGrWRes,e3);
        w3n.setAlignItems(FlexComponent.Alignment.CENTER);
        HorizontalLayout w4n = new HorizontalLayout(nGeRoll,nGeW,nGeWRes,e4);
        w4n.setAlignItems(FlexComponent.Alignment.CENTER);
        HorizontalLayout w5n = new HorizontalLayout(nErRoll,nErW,nErWRes,e5);
        w5n.setAlignItems(FlexComponent.Alignment.CENTER);
        HorizontalLayout w6n = new HorizontalLayout(nInRoll,nInW,nInWRes,e6);
        w6n.setAlignItems(FlexComponent.Alignment.CENTER);
        HorizontalLayout w7n = new HorizontalLayout(nMaRoll,nMaW,nMaWRes,e7);
        w7n.setAlignItems(FlexComponent.Alignment.CENTER);
        HorizontalLayout w8n = new HorizontalLayout(nBiRoll,nBiW,nBiWRes,e8);
        w8n.setAlignItems(FlexComponent.Alignment.CENTER);
        HorizontalLayout w9n = new HorizontalLayout(nGlRoll,nGlW,nGlWRes,e9);
        w9n.setAlignItems(FlexComponent.Alignment.CENTER);

        class TransferButtonListener
                implements ComponentEventListener<ClickEvent<Button>> {
            @Override
            public void onComponentEvent(ClickEvent<Button> event) {

                newSt.setValue(e1.getValue());
                newKo.setValue(e2.getValue());
                newGr.setValue(e3.getValue());
                newGe.setValue(e4.getValue());
                newEr.setValue(e5.getValue());
                newIn.setValue(e6.getValue());
                newMa.setValue(e7.getValue());
                newBi.setValue(e8.getValue());
                //newBw.getValue();

                int nAge = newAge.getValue();
                int nSt = newSt.getValue();
                int nKo = newKo.getValue();
                int nGr = newGr.getValue();
                int nGe = newGe.getValue();
                int nEr = newEr.getValue();
                int nIn = newIn.getValue();
                int nMa = newMa.getValue();
                int nBi = newBi.getValue();
                int nBw = newBw.getValue();

                NewCharacter nc = new NewCharacter(nAge, nSt, nKo, nGr, nGe, nEr, nIn, nMa, nBi, nBw);

                // Calculate new STA/SAN
                staNewCal.setText(Integer.toString(newMa.getValue()*1));

                //Calculate new TP/HP
                int tpNew = (nc.getNewKo() + nc.getNewGr()) / 10;
                tpNewCal.setText(String.valueOf(tpNew));

                //Calculate Statur
                int StGr = nc.getNewSt() + nc.getNewGr();
                String nSb = "0";
                int nStatur = 0;

                if(StGr >=2 && StGr <= 64){
                    nSb = String.valueOf(-2);
                    nStatur = -2;
                } else if (StGr >=65 && StGr <= 84) {
                    nSb = String.valueOf(-1);
                    nStatur = -1;
                } else if (StGr >=85 && StGr <= 124) {
                    nSb = String.valueOf(0);
                    nStatur = 0;
                } else if(StGr >=125 && StGr <= 164) {
                    nSb = "+1W4";
                    nStatur = 1;
                } else if(StGr >=165 && StGr <= 204) {
                    nSb = "+1W6";
                    nStatur = 2;
                } else if(StGr >=205 && StGr <= 284) {
                    nSb = "+2W6";
                    nStatur = 3;
                } else if(StGr >=285 && StGr <= 364) {
                    nSb = "+3W6";
                    nStatur = 4;
                } else if(StGr >=365 && StGr <= 444) {
                    nSb = "+4W6";
                    nStatur = 5;
                } else if(StGr >=445 && StGr <= 524) {
                    nSb = "+5W6";
                    nStatur = 6;
                } else if(StGr >=525) {
                    int faktor = StGr / 80;
                    int rest = StGr % 80;
                    System.out.println("Faktor: " + faktor);
                    System.out.println("Rest: " + rest);
                    String nsbVar = String.valueOf(faktor-1);
                    int nstaturVar = faktor;


                    if(rest >= 1){
                        nsbVar = String.valueOf(faktor);
                        nstaturVar = faktor+1;
                    }

                    nSb = "+" + nsbVar + "W6";
                    nStatur = nstaturVar;
                    System.out.println("nsb: " + nSb);
                    System.out.println("nStatur: " + nStatur);
                }
                sbNewCal.setText(nSb);
                staturNewCal.setText(String.valueOf(nStatur));


                //calculate  NEW BW / movement rate
                if (nc.getNewSt() > nc.getNewGr() && nc.getNewGe() > nc.getNewGr()){
                    nc.setnBw(9);
                    newBw.setValue(nc.getnBw());
                } else if(nc.getNewGe() < nc.getNewGr() && nc.getNewSt() < nc.getNewGr()){
                    nc.setnBw(7);
                    newBw.setValue(nc.getnBw());
                } else if (nc.getNewSt() >= nc.getNewGr()
                        || nc.getNewGe() >= nc.getNewGr()
                        || nc.getNewSt() == nc.getNewGr()
                        && nc.getNewSt() == nc.getNewGe()){
                    nc.setnBw(8);
                    newBw.setValue(nc.getnBw());
                }

            }
        }


        //
        // right button row ---------------------------------------------------------------------------------------
        //

        Button transferBtn = new Button("Übertragen");
        transferBtn.addClickListener(new TransferButtonListener());

        VerticalLayout wuerfe7E = new VerticalLayout(w1n,w2n,w3n,w4n,w5n,w6n,w7n,w8n,w9n,transferBtn);
        wuerfe7E.setWidth("912px");



        // mit skills tabelle
        //VerticalLayout mainV = new VerticalLayout(titleH1,siteDescription,charForms,titleSkillTable,skillsTable,footer);
        //mainV.setHorizontalComponentAlignment(FlexComponent.Alignment.CENTER, skillsTable);

        //ohne skills tabelle
        VerticalLayout mainV = new VerticalLayout(ccLogoImg,siteDescription,charForms,wuerfelTitle,wuerfelAnleitung,wuerfe7E,footer);
        mainV.setAlignItems(FlexComponent.Alignment.CENTER);


        return mainV;
    }
}