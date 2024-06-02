interface IBenefit {
    description: String
}

interface IService {
    title: String,
    description: String,
    images: Array<String>,
    benefits: Array<IBenefit>
}

interface IServiceList extends Array<IService> {}


export const serviceList : IServiceList = [
  {
    title: "Pulidos de pisos",
    description:
      "El pulido del sustrato para la preparación de la superficie es fundamental dentro del esquema de pintado, ya sea hormigon nuevo u antiguo. El proceso de pulido se trabaja en conjunto de un kit de aspirado que proporciona una mayor limpieza y bajos índices de sílice en el aire. La preparación de la superficie del piso es el primer y más importante paso para la aplicación del tratamiento para pisos de concreto. Sin la preparación de la superficie del piso, puede surgir un problema una vez que se instala el nuevo sistema de piso. Las superficies irregulares, los pisos descascarados y burbujeantes suelen ser el resultado de una preparación inadecuada del piso. Cada losa de concreto debe estar limpia, abierta y porosa antes del tratamiento e instalación del piso.",
    images: [],
    benefits: [
      {
        description: "Mayor duración de los esquemas aplicados.",
      },
      {
        description:
          "Permite identificar daños imperceptibles a primera vista.",
      },
      {
        description: "Proporciona rugosidad antes de la aplicación.",
      },
      {
        description: "Remueve esquemas no compatibles o antiguos.",
      },
    ],
  },
  {
    title: "Aplicación de poliurea",
    description:
      "La poliurea es un polímero sintético obtenido de la reacción de una diamina con un disocianato, la poliurea está especialmente diseñada para la minería. Gran resistencia mecánica y gran resistencia a productos ácidos, alcalinos y de base petróleo. Aplicado por sistema de proyección bicomponente con equipos de alta presión y mangueras calefaccionadas, seca al tacto y puede transitarse en 10 minutos.Se puede aplicar sobre superficies tan distintas como metal, hormigón, espuma de poliuretano, fibra de vidrio cerámica o madera y su utilización es recomendable en función a sus cualidades: protección anti abrasiva, revestimiento anticorrosivo, revestimiento e impermeabilización de tejados, cubiertas, incluso transitables por vehículos, protección de espuma de poliuretano, pisos industriales y de estacionamientos, y mucho más…",
    images: [],
    benefits: [
        {
            description: "Impermeabilizante que brinda resultados muy eficaces.",
        },
        {
            description: "La superficie donde se aplica queda proteguida de la corroción",
        },
        {
            description: "Se adapta a las superficies irregulares.",
        },
        {
            description: "Es un producto que cuenta con las propiedades de alta densidad y estanqueidad.",
        },
        {
            description: "Alta resistencia física, soporta abrasión, desgarro y también comprensión.",
        },
        {
            description: "No sufre modificaciones como resultado del efecto de los rayos UV.",
        },
        {
            description: "Resiste la acción de medios ácidos y también alcalinos.",
        },
        {
            description: "Se puede maniobrar y soporta temperaturas extremas, desde -30°C hasta 150°C.",
        },
        {
            description: "Certificación que asegura que es un producto antirraíces.ideal para techos verdes.",
        },
        {
            description: "Protector ignífugo.",
        },
        {
            description: "Se puede aplicar directamente sobre zinc, chapa y fibrocemento.",
        },
        {
            description: "No es un producto tóxico. Puede estar en contacto con alimentos y agua potable.",
        },
        {
            description: "Producto ecológico porque no contiene disolventes ni plastificantes. Es 100% sólido.",
        },
    ]
  },
  {
    title: "Revestimientos industriales",
    description:
      "Existe una amplia gama de soluciones para revestir; epoxicos, poliuretanos, poliuretano cemento, entumecente, morteros uretanos, metacrilatos, masillas epoxicas, etc. Antes de proponer un esquema se debe hacer un estudio de la zona a tratar, con el fin de utilizar el revestimiento correcto , existes zonas con temperaturas variables, altos niveles de acidez, alto trafico vehicular, expuestas a la radiacion uv, etc. Tambien se debe tener en cuenta la superficie donde se aplicara el producto o si este es compatible para recubrir la superficie. Se recomienda una visita técnica para determinar el producto afín",
    images: [],
    benefits: [
        {
            description: "Protege la superficie del hormigon.",
        },
        {
            description: "Permite demarcar zonas de transito peatonal.",
        },
        {
            description: "Facilita la limpieza.",
        },
        {
            description: "Resistencia a los rayos uv.",
        },
        {
            description: "Amplia gama de colores, según carta RAL.",
        },
        {
            description: "Aumenta la vida utíl de la superficie.",
        }
    ]
  },
  {
    title: "Reparación y recuperación de superficies",
    description:
      "Los daños producidos por el alto trabajo que reciben las superficies pueden ser recuperados en su gran mayoria. El mercado cuenta con una amplia variedad de morteros de reparación y masillas epóxicas para la recuperación de hormigones destruidos, contaminados, con grietas o microgrietas. Estos productos tambien sirven para reforzar zonas altamente mal.",
    images: [],
    benefits: [
        {
            description: "Reducir el costo que saldria retirar y reponer dicho hortmigón.",
        },
        {
            description: "Reducir el tiempo que tomaria ejecutar dichos trabajos.",
        },
        {
            description: "Mantener hormigones deteriorados en buenas condiciones.",
        },
        {
            description: "Mejorar la resistencia de la zona dañada.",
        },
    ]
  },
  {
    title: "Arriendo y/o servicio de hidrolavado",
    description:
      "La indsutria alimenticia requiere de un servicio de respuesta rápida y mantención constante de equipos y/o personal para aseos entre procesos o lavado de contenedores, la experiencia adquirida con otros clientes nos habilita para ofrecer un servicio de calidad tanto en respuesta como en equipos.",
    images: [],
    benefits: [
        {
            description: "Servicio adaptable a las necesidades del cliente en horarios y potencia de equipos.",
        },
        {
            description: "Mantenciones constantes a equipos.",
        },
        {
            description: "Repocición en caso de falla",
        },
        {
            description: "Rapida respuesta para recambio de equipo (equipos de respaldo de emergencias).",
        },
        {
            description: "Costo fijo estipulado, mayor control de egresos."
        },
        {
            description: "Control y capacitacion interna de personal."
        },
        {
            description: "Baja tasa de accidentabilidad, afiliados a mutual de seguridad."
        }
    ]
  },
  {
    title: "Servicio de remocion abrasivo (Granallado) Quill Falcon Blasting.",
    description:
      "El sistema de se utiliza para remover todo tipo de suciedades e impurezas logrando llegar a las superficies solidas con un sistema que combina agua y medios abrasivos y aire para brindar un metodo eficiente pero suave de limpieza. Funciona con un chorro abrasivo humedo que puede llevar particulas de vidrio, bicarbonato de sodio, bicarbonato de calcio o silicato de metal.",
    images: [],
    benefits: [
        {
            description: "Limpia y perfila las superficies para que los nuevos recubrimientos se adhieran mejor por mas tiempo.",
        },
        {
            description: "Sin chispas ni nubes de polvo, excelente seguridad y visibilidad.",
        },
        {
            description: "Mayor control y precision sobre toda la voladura del proceso.",
        },
        {
            description: "Clasificacion Ex, zona aprobada, acreditado por Baseefa, cumple con TuV, ATEX y NORSOK.",
        },
        {
            description: "Se puede utilizar en una amplia variedad de superficies, como fibra de vidrio, madera, ladrillo, vidrio, hormigon, acero y aluminio."
        }
    ]
  },
  {
    title: "Impermeabilizaciones.",
    description:
      "La impermeabilización protege las estructuras contra la infiltración de agua que  puede causar daños costosos e irreversibles. Es casi invisible después de que se completa la construcción. Todos los días el sótano de un edificio, o la capa más externa de un túnel, está expuesto a intensas fluctuaciones en los niveles de humedad y temperaturas, todo lo cual contribuye a su deterioro.La corrosión del acero es el mayor e invisible problema. Tanto el hormigón como estructuras 100% acero suben de corrosión si se ven constantemente sujetas a la presencia de agua. Posteriormente esto generará un serio daño estructural si no se tratan como corresponde.",
    images: [],
    benefits: [
        {
            description: "Aumenta la resistencia a la humedad de las superficies.",
        },
        {
            description: "Previene la filtración de liquidos hacia el interior.",
        },
        {
            description: "Protege las armaduras de hormigones expuestos a la interperie.",
        },
        {
            description: "Previene la filtración entre zonas humedas en edificios.",
        },
        {
            description: "Previene los daños del hormigon en jardineras por raíces."
        }
    ]
  },
  {
    title: "Instalacion reparacion y reposicion de tuberias PPR cobre y HDPE electro fusión y termofusión.",
    description:
      "Se realizan trabajos de instalacion ,reposición y reparaciones de tuberias de ppr, cobre y hdpe en sus distintos tipos de fusión. Se utilizan equipos certificados para dichos trabajos y se realizan las pruebas de presión pertinentes para la entrega de los tramos.",
    images: [],
    benefits: [
        {
            description: "Para el ppr y hdp, inmune a la corrosion.",
        },
        {
            description: "Entrega de voucher de fusion correcta.",
        },
        {
            description: "Flexibilidad de material ppr y hdpe.",
        },
        {
            description: "Material liviano y muy resistente.",
        }
    ]
  },
  {
    title: "Instalacion y mantencion de salas de bombas",
    description:
      "Instalacion y mantencion de salas de bombas en estanques de almacenamiento de aguas, pozos profundos, pozos de filtración y plantas elevadoras de aguas servidas. Mantención de salas de bombas en edificios y plantas industriales. Implementacion de NUDOS y arranques en todo tipo de material.",
    images: [],
    benefits: [
        {
            description: "Amplia experiencia en la instalacion de salas de bombas y tableros de alimentacion.",
        },
        {
            description: "Registro de mantencion de equipos y seguimiento de siguientes mantenciones.",
        },
        {
            description: "Habilitados en registro de superintendencia de servicios sanitarios.",
        },
        {
            description: "Habilitados para proyectar, firmar y entregar a ente regulador de la zona.",
        }
    ]
  },
  {
    title: "Pulido de pisos superfloor",
    description:
      "Los pisos de concreto merecen un mejor trato que simplemente caminar sobre ellos. Un superpiso realmente le hará apreciar las ventajas de tener concreto como superficie de piso expuesta. Los suelos grises y sucios se transforman en suelos brillantes, fáciles de limpiar, respetuosos con el medio ambiente y duraderos. Es una opción extremadamente económica para todo tipo de actividades comerciales. En comparación con los métodos tradicionales para pisos de concreto o epoxi, por ejemplo, el superpiso ofrece una durabilidad inigualable. El hormigón de construcción procesado tiene una vida útil ilimitada, es decir, la misma que la vida útil del edificio. La inversión inicial es igual o inferior a la de las soluciones de pisos tradicionales, pero el bajo costo de mantenimiento y la vida útil más prolongada hacen del superpiso la opción de inversión más lucrativa. El costo del ciclo de vida es aproximadamente un 60 % menor que el de las soluciones de pisos tradicionales. Y usando el método de limpieza abrillantadora, descubrirá que su piso es simple, ecológico y rentable de mantener.",
    images: [],
    benefits: [
        {
            description: "Económico.",
        },
        {
            description: "Estéticamente atractivo.",
        },
        {
            description: "Opción respetuosa con el medio ambiente.",
        },
        {
            description: "Se puede colorear sin perder sus cualidades.",
        },
        {
            description: "Antideslizante, incluso cuando el piso está mojado",
        },
        {
            description: "La clase más alta de seguridad contra incendios.",
        },
        {
            description: "Fácil de limpiar. Sin marcas de camiones, etc.",
        },
        {
            description: "Bien dentro del rango del estándar internacional IEC 61340-5-1 y el estándar estadounidense ANSI/ESD S20.20-1999 para valores ESD.",
        },
        {
            description: "Tan bueno para nuevas instalaciones como para renovaciones de pisos.",
        },
        {
            description: "Coste del ciclo de vida un 60 % inferior al de las soluciones tradicionales para suelos.",
        },
        {
            description: "Menor nivel de vibración para vehículos.",
        }
    ]
  }
];
