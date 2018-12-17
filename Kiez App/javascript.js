
//Funktion für unseren Button. Je nach Stellung wird an der Stelle ein Container generiert der das Menü darstellt

let schalter= false;
function MenuButtonHandler()
{
    schalter=!schalter

    if(schalter)
    {
        let NavigationFullScreen= document.getElementById("navScreen");
        NavigationFullScreen.appendChild(document.getElementById("MainNav"))
    }
}