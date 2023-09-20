<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 4
      h1 Sistemas de información en el flujo de mercancías
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/1.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        .cajon.color-acento-contenido.p-4(style="background-color:#DDF8F7;" data-aos="flip-up")
          p.mb-0 Los sistemas de información logística proporcionan información sobre todo el flujo de las mercancías. Hacen seguimiento en tiempo real del trayecto, de su proceso y estado, preparando a las áreas de compras, producción, almacenamiento, financieros y de contabilidad, sobre el ingreso de los mismos.
          p.mt-4.mb-0 Los fabricantes y comerciantes monitorean los productos y artículos para saber si llegarán a tiempo y en condiciones adecuadas a sus destinos y poder intervenir si sucede algún incidente.
        p.mt-4(data-aos="zoom-in") Los transportadores se enfocan en el progreso y el estado del medio de transporte y del equipo de transporte que contienen. En caso de un incidente o retraso, los transportadores dan aviso a sus clientes, pero el efecto que esto tendrá en la entrega o la reposición de existencias solo lo pueden comprender los comerciantes y los fabricantes.
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_4_1 4.1 Gestión del transporte
    
    p(data-aos="zoom-in") Este proceso permite tomar decisiones clave en el área logística. Adicionalmente, asegura de forma eficaz los flujos de mercancía hacia y desde los almacenes. Además de realizar estratégicamente una selección adecuada de los recursos de transporte a utilizar, la planeación de la programación de los movimientos y la identificación de los costos logísticos. 

    .mt-5.p-3(style="max-width:450px;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 Ventajas de la gestión del transporte
    
    p.mt-4(data-aos="zoom-in") Un proceso satisfactorio en la gestión del transporte permite aplicar estrategias que mejoren el resultado de la actividad logística, además permite influir en una ventaja competitiva para las empresas, puesto que determina la oferta y demanda en relación con los proveedores, sus precios, la fiabilidad en el transporte de la carga, etc. En la siguiente figura se pueden observar varias de las ventajas principales de la gestión del transporte para una empresa. 

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Figura 1.
      span Ventajas de la gestión del transporte 
    .col-xl-10.m-auto.mt-4
      figure
        img(src="@/assets/curso/tema4/2.svg" data-aos="zoom-in-up" alt="Imagen que contiene un esquema de las ventajas de la gestión del transporte, las cuales son: Correcta elección del modo de transporte: elección del sistema de transporte en relación a sus propias características, normativa, burocracia, disponibilidad, seguros, etc. Mejor calidad en el servicio prestado: al seleccionar correctamente un proveedor de transporte, se garantiza la elección de un buen servicio. Ahorro de recursos y costes: permite optimizar los recursos disponibles reduciendo costos finales. Mayor seguridad: permite ofrecer una garantía en relación a la entrega final del producto, y en sus procesos internos como externos. Mejor capacidad de respuesta ante imprevistos: al tener un mayor control sobre los procesos de transporte, se puede responder de forma más efectiva ante posibles problemas o imprevistos durante el proceso. Programación y diseño de rutas: se utiliza a través de software, porque permite llegar a un nivel de precisión óptimo en relación al número de destinos y su localización, los tiempos de cargas y descargas, los tiempos de tránsitos, los tipos de vehículos disponibles, etc. Elección del vehículo adecuado: una ruta será más eficaz si se realiza con vehículo más grande, aprovechando su espacio efectivo de carga y su peso máximo admitido. Mayor productividad: una estrategia de gestión de transporte será más productiva que otra en relación a la obtención de mayores beneficios y la correcta elección de sus procesos")
    
    p.mt-5(data-aos="zoom-in") Gracias a la evolución del transporte y el uso de software específicos, la gestión del transporte se ha vuelto mucho más eficiente en la actualidad, ofreciendo una mejor experiencia tanto para la empresa como para los clientes.

    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_4_2 4.2  Seguimiento y rastreo a los productos
    
    p(data-aos="zoom-in") El seguimiento y rastreo de los productos permite monitorear rigurosamente el producto transportado en tiempo real, y realizar un acompañamiento a través de plataformas tecnológicas para verificar el estado actual del producto en cualquier momento. 
    p.mt-4(data-aos="zoom-in") El seguimiento en línea permite: 

    ul.lista-ul--separador.mt-4
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Números de referencia:] enumera y ordena los productos para tener facilidad de traza, cada producto tiene un indicador único.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Fecha de entrega estimada:] cada producto desde el momento de su recibo debe tener una fecha estimada de entrega que se le comparte al cliente para apoyar su rastreo.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Eficiencia en los procesos:] analiza y ejecuta acciones en tiempo real, para mejorar su logística de distribución.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Tomar acciones sobre los paquetes que ha enviado:] permite reprogramar entrega, indicar los horarios y fechas de entregas).
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Foco en el cliente final:] notifica a los clientes, vía email o SMS, sobre el estado de sus entregas. 
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Seguimiento de entregas:] gestiona en tiempo real el estado de sus hojas de ruta y su entrega.
    
    .mt-5.p-3(style="max-width:450px;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 #[em Tracking]
    
    p.mt-4(data-aos="zoom-in") Su significado es seguimiento. El #[em tracking] permite identificar los cuellos de botella y las oportunidades de mejora para tomar decisiones y diseñar nuevas estrategias, además de ser una herramienta de soporte indispensable para trabajar su nivel de competitividad.
    p.mt-4(data-aos="zoom-in") Este sistema permite hacer un seguimiento en línea, verificando el estado real de sus pedidos, actualizando en cada momento en el que el pedido haya variado su estado en el proceso logístico. La información del #[em tracking] está disponible gracias a los sistemas de seguimiento y control. 

    .h4.TB.mt-5 <i class="fas fa-globe fa-spin" style="color:#57DBD8; padding-left: 5px"></i> Gestión del #[em tracking]
    
    p.mt-4(data-aos="zoom-in") El proceso del #[em tracking consiste de tres fases clave que permiten garantizar el rastreo de un producto de inicio a fin.]

    ul.lista-ul--separador.mt-4
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Hacia atrás:] incluye la identificación y comprobación de materias primas e información sobre los proveedores.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Interna:] se lleva a cabo dentro de la empresa y está relacionada con la entrada y salida de mercancía.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | #[strong Hacia adelante:] implica el seguimiento y control en sí de la mercancía que se distribuirá en el mercado.

    .h4.TB.mt-5 <i class="fas fa-globe fa-spin" style="color:#57DBD8; padding-left: 5px"></i> Rastreo de productos
    
    p.mt-4(data-aos="zoom-in") El rastreo inteligente es un proceso que se liga directamente a la tecnología, puesto que verifica en tiempo real la ubicación de las mercancías en las diferentes etapas de la cadena de suministro. Asimismo, facilita la toma de decisiones, el control y la optimización de los procesos logísticos. 
    p.mt-4(data-aos="zoom-in") Para llevar a cabo un rastreo inteligente de productos se destacan:

    .row.mt-5
      .col-xl-6.col-lg-6.mb-4
        .crd_hover_txt(data-aos='flip-up')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema4/3.png' alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:#445476;padding-top:13px;")
            h5.mb-3.text-white.text-center RFID (#[em.text-white Radio Frequency Identification]) 
            p.mt-4.text-white.mb-0 O identificación por radiofrecuencia, es un sistema que permite identificar, almacenar y transmitir datos a través de dispositivos inteligentes denominados etiquetas, tarjetas o transpondedores RFID. Gracias a estos dispositivos, con el sistema RFID se puede conocer en remoto la información de un producto mediante ondas de radio.  
      .col-xl-6.col-lg-6.mb-4
        .crd_hover_txt(data-aos='flip-up')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema4/4.png' alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:#1A0F91;")
            h5.mb-3.text-white.text-center Internet de las cosas
            p.mt-3.text-white.mb-0 Es una tecnología que conecta los dispositivos físicos a una red de internet, para que sean gestionados o monitoreados por otros dispositivos, sin la necesidad de intervención humana. Con este sistema, la empresa puede hacer un rastreo inteligente sobre la ubicación exacta de cada producto, acceder de forma automatizada a datos históricos de rutas recorridas, las condiciones de los vehículos, el estado de las mercancías, etc. 
      .col-xl-6.col-lg-6.mb-4
        .crd_hover_txt(data-aos='flip-up')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema4/5.png' alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:#445476;")
            h5.mb-3.text-white.text-center #[em.text-white Blockchain]
            p.mt-3.text-white.mb-0 Es una tecnología que conecta los dispositivos físicos a una red de internet, para que sean gestionados o monitoreados por otros dispositivos, sin la necesidad de intervención humana. Con este sistema la empresa puede hacer un rastreo inteligente sobre la ubicación exacta de cada producto, acceder de forma automatizada a datos históricos de rutas recorridas, las condiciones de los vehículos, el estado de las mercancías, etc. 
      .col-xl-6.col-lg-6.mb-4
        .crd_hover_txt(data-aos='flip-up')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema4/6.png' alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:#1A0F91;")
            h5.mb-3.text-white.text-center GPS
            p.mt-3.text-white.mb-0 Sistema de posicionamiento global que permite conocer la ubicación del vehículo en todo momento, monitorizar su rendimiento logístico, supervisar el estado del transporte de las mercancías e, incluso, mantener informados a los clientes sobre la ubicación de sus pedidos en tiempo real.
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_4_3 4.3  Trazabilidad en los procesos logísticos de flujo de mercancías
    
    p(data-aos="zoom-in") Seguir la trayectoria de un producto significa determinar su procedencia, el tratamiento y la distribución que requiere. La meta de un proceso de trazabilidad es mantener el control y registro por medio del historial del producto con el fin de garantizar su calidad al cliente.
    p.mt-4(data-aos="zoom-in") Algunos de los beneficios que aporta este proceso:

    .col-xl-8.m-auto.mt-5.col-lg-10
      .row
        .col-lg-4.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema4/7.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
        .col-lg-8.col-md-6(style="place-self:center;")
          ul.lista-ul--separador
            li(data-aos="zoom-in")
              i.fas.fa-angle-right(style="color:#FE7062;")
              | Control personalizado de partida y lote.
            li(data-aos="zoom-in")
              i.fas.fa-angle-right(style="color:#FE7062;")
              | Identificación de materia auxiliar y materia prima.
            li(data-aos="zoom-in")
              i.fas.fa-angle-right(style="color:#FE7062;")
              | Detección, acotación y análisis de incidencias que puedan surgir.
            li(data-aos="zoom-in")
              i.fas.fa-angle-right(style="color:#FE7062;")
              | Control de la evolución del producto.
            li(data-aos="zoom-in")
              i.fas.fa-angle-right(style="color:#FE7062;")
              | Optimización del proceso productivo.
            li(data-aos="zoom-in")
              i.fas.fa-angle-right(style="color:#FE7062;")
              | Disminución de costes operativos y productivos.
            li(data-aos="zoom-in")
              i.fas.fa-angle-right(style="color:#FE7062;")
              | Organización de stock almacenado.
            li(data-aos="zoom-in")
              i.fas.fa-angle-right(style="color:#FE7062;")
              | Retirada de artículos no aptos para su consumo.
    
      .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
        h5 Figura 2.
        span Proceso de trazabilidad en el flujo de mercancias
      figure.mt-4
        img(src="@/assets/curso/tema4/8.svg" data-aos="zoom-in-up" alt="Imagen que muestra de manera gráfica 10 ventajas de la gestión del transporte.")
    
    .col-xl-10.m-auto.mt-5
      .row.m-0.p-4(style="background: linear-gradient(280deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);border-radius:10px;" data-aos="flip-up")
        .col-lg-1.col-md-3.mb-4.mb-md-0(style="place-self:center;")
          figure.text-center
            img(src="@/assets/curso/tema4/9.svg" data-aos="zoom-in-right" style="display:inline;max-width:80px;" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0
          h4.text-white(data-aos="zoom-in") Para conocer más acerca de la trazabilidad en los procesos logísticos es necesario revisar el siguiente material.
          p.text-small.text-white(data-aos="zoom-in") Video: Trazabilidad en los procesos logísticos (Ecored, 2021).
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=PUOOkuzzSnM " target="_blank" style="box-shadow:0px 0px 4px 1px rgba(0,0,0,.4);")
            span Ir al enlace
            i.fas.fa-link

    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_4_4 4.4  Cumplimiento de requisitos
    
    p(data-aos="zoom-in") En un ambiente empresarial cada vez más competitivo, las empresas encargadas de realizar la distribución de productos, deben contar con procesos logísticos adecuados y óptimos para dar un excelente servicio. Cuidar el proceso de producción desde el inicio hasta la llegada al cliente es fundamental para mantener las ventas en estado evolutivo y fortalecer la imagen de la compañía frente a tus competidores.
    p.mt-4(data-aos="zoom-in") Se debe contar con un plan logístico en materia de distribución, el cual garantice las entregas en tiempo y forma y dando seguimiento a la cadena de suministro. Es obligación de las empresas poner a disposición del cliente los bienes en el tiempo y lugar preciso.
    p.mt-4(data-aos="zoom-in") Para realizar el cumplimiento de estos procesos se debe realizar un seguimiento estricto a:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 5.
      span Cumplimiento de procesos de distribución
    
    .tabla-a.color-primario.mt-4
      table
        caption Nota. <span style="font-weight: 400">Adaptada de Kottler y Keller (2016).</span>
        tbody
          tr(style="background-color:#F6F6F6;" data-aos="fade-right")
            td.fw-bold.text-center.p-4.p-md-5(style="border:0; width: 25%;") Garantizar la oferta
            td.p-4.p-md-5(style="border:0; width: 75%;") Asegurarse de tener la disponibilidad del producto en el almacén. 
          tr(style="background-color:#fff;" data-aos="fade-right")
            td.fw-bold.text-center.p-4(style="border:0;") Seguimiento a números de serie
            td.p-4(style="border:0;") Es utilizado para tener un panorama claro acerca del lugar exacto en donde se encuentra el producto. Con ello podemos determinar la ubicación del mismo, bien sea en almacén o transporte. 
          tr(style="background-color:#F6F6F6;" data-aos="fade-right")
            td.fw-bold.text-center.p-4(style="border:0;") Logística en la cadena de suministro
            td.p-4(style="border:0;") La logística es un componente dentro de la cadena de suministro. Si bien la logística se dirige a la planificación, ejecución y control de la entrega de productos y a los clientes en el momento que lo requieren, la cadena de suministro es un elemento que abarca más áreas del proceso productivo de las empresas, el cual va desde la obtención de la materia prima, el transporte, la producción y la distribución para su comercialización. 
          tr(style="background-color:#fff;" data-aos="fade-right")
            td.fw-bold.text-center.p-4(style="border:0;") Reducir el número de manos que tocan el producto
            td.p-4(style="border:0;") Desde su producción, es preciso tener claridad sobre la especificidad del proceso, con el objetivo de evitar realizar movimientos innecesarios entre áreas que generarán un incremento en los tiempos de salida del producto, pero, sobre todo, un incremento en los costos, llevando a aumentar el precio final del bien que estás ofreciendo.
          tr(style="background-color:#F6F6F6;" data-aos="fade-right")
            td.fw-bold.text-center.p-4(style="border:0;") Mejorar la comunicación interna y externa
            td.p-4(style="border:0;") Es de suma importancia que además de cuidar los procesos operativos que involucra la logística, se tenga una comunicación interna entre todas las áreas, involucrando al personal, evitando fallos en los procesos. #[br] En relación con la comunicación externa, la visión clara del mercado, proporciona generar riesgos en los canales de comunicación con proveedores y clientes.
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_4_5 4.5  Indicadores de gestión
    
    p(data-aos="zoom-in") La distribución de las mercancías es de vital importancia en el éxito logístico de una organización, para esto se debe tener control de costos y productividad relacionados con la cadena suministro de la empresa, en particular la gestión del transporte, la cual es la actividad que más consume recursos y esfuerzos.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 6.
      span Indicador de transporte logístico
    
    .tabla-a.color-secundario.mt-4
      table
        caption Nota. <span style="font-weight: 400">Adaptada de Mora (2008).</span>
        thead
          tr(data-aos="fade-right")
            th.text-center.p-4 Indicador
            th.text-center.p-4 Cálculo
            th.text-center.p-4 Objetivo
        tbody
          tr(data-aos="fade-right")
            td.text-center.p-4 Costo de transporte sobre las ventas.
            td.text-center.p-4  Costo de transporte / Valor ventas totales * 100.
            td.text-center.p-4 Controlar el rubro respecto a las ventas generadas en un periodo determinado.
          tr(data-aos="fade-right")
            td.text-center.p-4 Costo operativo por conductor.
            td.text-center.p-4  Costo total de transporte/ Número de conductores.
            td.text-center.p-4 Conocer el costo por de cada conductor dentro del total de gastos.
          tr(data-aos="fade-right")
            td.text-center.p-4 Comparativo de transporte.
            td.text-center.p-4  Costo de transporte propio por unidad / #[br] Costo de contratar transporte por unidad.
            td.text-center.p-4 Medir el costo unitario de transportar una unidad respecto al ofrecido por los transportadores del medio.
          tr(data-aos="fade-right")
            td.text-center.p-4 Entregas a tiempo.
            td.text-center.p-4  Número de entregas a tiempo / Número total de entregas realizadas x100.
            td.text-center.p-4 Revela la agilidad del transporte en la última milla en forma de porcentaje.
          tr(data-aos="fade-right")
            td.text-center.p-4 Nivel de utilización de la flota.
            td.text-center.p-4  Capacidad real utilizada/Capacidad total en kg o m#[sup 3].
            td.text-center.p-4 Determina la capacidad de transporte ocupada en relación con su capacidad total en volumen (m#[sup 3]) o peso (kg).
          tr(data-aos="fade-right")
            td.text-center.p-4 Nivel de cumplimiento en despacho.
            td.text-center.p-4  Número de despachos cumplidos a tiempo/ #[br] Número total de despachos requeridos.
            td.text-center.p-4 Controlar la eficacia de los despachos efectuados por el centro de distribución.
    
    
      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #b0c0d2
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  border-radius: 10px
.crd_hover_txt .crd_hover_txt--body
  position: absolute
  padding: 1.5rem
  width: 100%
  bottom: 0
  transition: all .5s ease-in-out
  transform: translateY(calc(100% - 3.85rem))
  background-color: #fff7e6
.crd_hover_txt:hover .crd_hover_txt--body
  transition: all .5s ease-in-out
  transform: translateY(0)
</style>
