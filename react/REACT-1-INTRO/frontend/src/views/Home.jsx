import Seccion from "../components/Seccion";

export default function Home() {
  const secciones = [
    {
      texto: "HTML es un lenguaje de marcado para crear páginas web",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
      precio: 10,
    },
    {
      titulo: "CSS",
      texto: "CSS es un lenguaje de estilo para crear páginas web",
      imagen: "https://codigosimples.net/wp-content/uploads/2016/03/css3.jpg",
      precio: 20,
    },
    {
      titulo: "JavaScript",
      texto: "JavaScript es un lenguaje de programación para crear páginas web",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&shttps://skillforge.com/wp-content/uploads/2020/10/javascript.png",
    },
    {
      titulo: "React",
      texto: "React es un framework de programación para crear páginas web",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      precio: 100,
    }
  ];

  const etiquetas = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]

  return (
    <div className="home">
      <header>

      </header>
      
      <div className="grid grid-cols-3 gap-4">
        {secciones.map((s, indice)=>{
          return <Seccion key={indice} objeto={s} etiquetas={etiquetas}/>
        })}
      </div>
    </div>
  );
}
