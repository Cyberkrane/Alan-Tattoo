var catalogo = [{
        src: "./img/works/001.jpg"
    },
    {
        src: "./img/works/002.jpg"
    },
    {
        src: "./img/works/003.jpg"
    },
    {
        src: "./img/works/004.jpg"
    },
    {
        src: "./img/works/005.jpg"
    },
    {
        src: "./img/works/006.jpg"
    },
    {
        src: "./img/works/007.jpg"
    },
    {
        src: "./img/works/008.jpg"
    },
    {
        src: "./img/works/009.jpg"
    },
    {
        src: "./img/works/010.jpg"
    },
    {
        src: "./img/works/011.jpg"
    },
    {
        src: "./img/works/013.jpg"
    },
    {
        src: "./img/works/014.jpg"
    },
    {
        src: "./img/works/015.jpg"
    },
    {
        src: "./img/works/016.jpg"
    },
    {
        src: "./img/works/017.jpg"
    },
    {
        src: "./img/works/018.jpg"
    },
    {
        src: "./img/works/019.jpg"
    },
    {
        src: "./img/works/020.jpg"
    },
    {
        src: "./img/works/021.jpg"
    },
    {
        src: "./img/works/022.jpg"
    },
    {
        src: "./img/works/023.jpg"
    },
    {
        src: "./img/works/024.jpg"
    },
    {
        src: "./img/works/025.jpg"
    },
]



function mostrarGal() {
    var Tattoo = '';
    for (var i = 0; i < catalogo.length; i++) {
        Tattoo += '<div class="col-sm-12 col-lg-4 my-2"><img src="' + catalogo[i].src + '" alt="aqui deberia haber un tatto"></div>';
    }
    document.getElementById('trabajos').innerHTML = Tattoo;
};
mostrarGal();

function enviar_mensaje() {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
        var b = document.getElementById("get-number").innerHTML,
            c = document.getElementById("chat-input").value,
            d = "https://web.whatsapp.com/send",
            e = b,
            f = "&text=" + c;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";
        var g = d + "?phone=" + e + f;
        window.open(g, "_blank");
    }
}

const whatsapp_chat = document.getElementById("whatsapp-chat");

function cerrar_chat() {
    whatsapp_chat.classList.add("hide");
    whatsapp_chat.classList.remove("show");

}

function mostrar_chat() {
    whatsapp_chat.classList.add("show");
    whatsapp_chat.classList.remove("hide");
}