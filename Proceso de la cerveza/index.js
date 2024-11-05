function mostrarFase(fase) {
    const descripcionFase = document.getElementById("descripcion-fase");
    let contenido = "";

    switch(fase) {
        case 'malteado':
            contenido = "<h3>Malteado</h3><p>En esta primera fase en la cual el grano de cebada se hace germinar controladamente, induciéndose la síntesis de una gran variedad de enzimas. Finalizada la germinación, se detiene la actividad de estas enzimas mediante el secado y tostado del grano. En este proceso también se producen reacciones entre azúcares y proteínas, con la formación de ciertas sustancias que influirán sobre el color, aroma y sabor final de la cerveza. Las cervezas doradas o pálidas se fabrican con malta poco tostada, a lo sumo a 8085ºC. Las cervezas negras, más o menos oscuras, se elaboran con maltas tostadas a temperaturas de hasta 95-110ºC. La determinación es el paso final del malteado. Las raíces de los granos tostados se eliminan por fricción mediante un proceso mecánico. El grano, que ya se denomina malta, está ahora listo y dispuesto para la elaboración de la cerveza.</p>";
            break;
        case 'Obtencion del mosto':
            contenido = "<h3>Obtencion del mosto</h3><p>Esta etapa tiene como objetivo extraer de la malta las partes útiles para que la levadura pueda fermentar el mosto. Después de varias semanas de reposo, la malta se muele y se mezcla con agua caliente a temperaturas controladas en un recipiente de cobre o de acero inoxidable. Durante este proceso los almidones contenidos en la malta se transforman en azúcares, que luego serán disueltos en agua para obtener el mosto. Posteriormente, el mosto se filtra para eliminar los residuos insolubles de la malta y se hierve con el lúpulo, el cual otorga a la cerveza su sabor amargo y aroma característicos. El mosto se clarifica, enfría entre 10 y 12 ºC y se airea. De este modo queda debidamente preparado para añadir la levadura y comenzar la fermentación.</p>";
            break;
        case 'fermentacion':
            contenido = "<h3>Fermentación</h3><p>La oxigenación del mosto se efectúa antes de entrar en los tanques de fermentación para que la levadura añadida sea capaz de reproducirse y multiplicarse. Seguidamente, la levadura transforma los azúcares del mosto en alcohol y gas carbónico y un gran número de componentes aromáticos, los cuales le confieren a la cerveza «verde» sus características típicas. Este paso tiene lugar en aproximadamente una semana.</p>";
            break;
        case 'maduracion':
            contenido = "<h3>Maduración</h3><p>Terminado el proceso de fermentación, la cerveza «verde» se enfría a cero grados por aproximadamente dos semanas. Dependiendo del tiempo que el líquido permanezca en estos recipientes se obtiene una cerveza más estable y limpia. Antes de proceder a su envasado, la cerveza se filtra para eliminar los restos sólidos. A continuación, se guarda en grandes recipientes de acero inoxidable, de donde se trasiega, y se envía a envasado. Según la Enciclopedia del Gourmet (Juan Muñoz Ramos, Ed. Planeta, 2000), los amantes de la cerveza dicen que existen tantos tipos de cerveza como cerveceros hay en el mundo. Ciertamente, clasificar las cervezas resultar realmente difícil no por la variedad de sus tipos sino por la multitud de estilos diferentes en su elaboración. Las empresas cerveceras, a través del minucioso control de sus procesos, aseguran la estabilidad y uniformidad del sabor de cada una de sus marcas.</p>";
            break;
        case 'Envasado':
            contenido = "<h3>Embotellado</h3><p>El proceso de envasado comienza con la recepción de las gaveras con las botellas usadas, provenientes de los consumidores (restaurantes, panaderías, supermercados, etc.) Las botellas son extraídas de las gaveras mediante la desembaladora, la cual las coloca en la banda transportadora para llevarlas hacia la lavadora. Simultáneamente, ingresan a la línea botellas nuevas, las cuales sustituyen a las que han cumplido su período de vida útiles, rayadas o deterioradas en su imagen. En las lavadoras, las botellas son tratadas con una solución de hidróxido de sodio al 3% a más de 80 °C. Para ello, cada botella pasa por varios tanques e inyectores que efectúan un buen lavado interno y desinfección. Posteriormente es enjuagada con agua suave debidamente tratada para eliminar cualquier tipo de impureza. Las botellas son colocadas en hileras antes de ser revisadas por el inspector electrónico, el cual detecta si cada una de éstas presenta las condiciones de impecabilidad que las haga adecuadas para ser llenadas. Las que tienen alguna irregularidad son desincorporadas de la línea destinándose al reciclaje. Las botellas en perfecto estado son enviadas a la llenadora, una especie de carrusel rotatorio donde cada botella ingresa a un puesto para ser llenada hasta el nivel previsto a velocidades que pueden superar las 1000 botellas por minuto. Inmediatamente después de la llenadora se ubica la tapadora, donde se le coloca la tapa corona herméticamente. Cumplida la fase anterior, el inspector electrónico verifica que cada una presente el nivel de llenado previsto y que esté debidamente tapada; las que tengan algún defecto son rechazadas y las que poseen el nivel adecuado y están bien tapadas siguen hacia la pasteurizadora.</p>";
            break;
        case 'Pasteurizacion':
            contenido = "<h3>Pasteurizacion</h3><p>Dentro de la pasteurizadora existen duchas de agua a temperaturas crecientes. Al comienzo su temperatura se eleva progresivamente cerca de 70 °C y luego baja de igual forma hasta salir a temperatura ambiente. Este proceso se denomina pasteurización y es una forma de garantizar la esterilidad comercial del producto, asegurando su estabilidad microbiológica.</p>";
            break;
        case 'Embalado':
            contenido = "<h3>Embalado</h3><p>Una vez que las botellas salen de la pasteurizadora, se dirigen a la embaladora, donde se introducen nuevamente en las gaveras para ser despachadas. Estas gaveras son igualmente inspeccionadas para garantizar que salgan con la cantidad adecuada de botellas, que no haya ninguna rota o sin tapa. En caso de faltar alguna, la gavera es rechazada de la línea para que un operario la complete y continúe su recorrido. El proceso de las latas y botellas no retornables es bastante similar al ya descrito.</p>";
            break;    
        default:
            contenido = "<p>Selecciona una fase para ver detalles del proceso.</p>";
    }

    descripcionFase.innerHTML = contenido;
}
