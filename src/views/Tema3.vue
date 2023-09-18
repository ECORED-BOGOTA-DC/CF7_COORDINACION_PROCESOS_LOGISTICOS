<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 3
      h1 Operaciones logísticas y el flujo de mercancías
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Cuando se habla de flujo de mercancías es necesario involucrar toda cadena de producción, desde la fabricación del producto hasta la comercialización de este, incluyendo el proceso de entrega. Su importancia se encamina a la correcta ejecución de los procesos, en donde la mercancía llegue al lugar convenido, de acuerdo con los requerimientos del cliente para su consumo o comercialización. La administración correcta de estas actividades es el inicio para establecer una cadena de suministro óptima. 
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_3_1 3.1  Procesos logísticos en el flujo de la mercancía
    
    p(data-aos="zoom-in") El flujo logístico comprende las actividades a las que es sometida la materia prima para desarrollar un producto, iniciando en la fase de fabricación, pasando por la comercialización, transporte, almacenaje y finalmente distribución.
    p.mt-4(data-aos="zoom-in") Para diseñar un correcto flujo logístico se debe realizar un análisis enfocado en la planeación de la demanda. Con esto se programa el proceso de producción, se determina el inventario y se define un plan de transporte hasta el lugar de venta.
    p.mt-4(data-aos="zoom-in") Para obtener un flujo logístico óptimo, con aumento en el rendimiento de la cadena de suministro, se debe gestionar un trabajo coordinado de cada uno de los departamentos, así como de las actividades relacionadas propiamente de la logística (abastecimiento, almacenamiento, organización de pedidos y distribución).
    p.mt-4(data-aos="zoom-in") A continuación, se presentan los tipos de flujos logísticos que definen el trazo de la cadena de suministros y son de dos tipos:

    AcordionA.acordion1.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="Flujo interno")
        p  Es el flujo más sencillo que existe, también se le conoce como el flujo de producción. Hace referencia al movimiento de materiales y componentes. Estos flujos incluyen actividades de transformación, bodegaje y transporte de materias primas.
      .row.col-xl-11.m-auto(titulo="Flujo externo")
        p Es un flujo más elaborado y dentro de este se encuentran dos tipos:
        p.mt-3 #[strong Flujo de suministro:] está relacionado con el movimiento o circulación de materiales desde los proveedores hasta el almacén de la empresa.
        p.mt-3 #[strong Flujo de distribución:] abarca los productos sometidos a alguna transformación desde la empresa al cliente; este proceso comprende el embalaje, transporte y el almacenamiento.
    
    p.mt-5(data-aos="zoom-in") Además, las estrategias de gestión de flujos según las necesidades de suministro se pueden clasificar de la siguiente forma:

    AcordionA.acordion1.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="Flujo <em>push</em>")
        p La planificación de la producción tiene como fundamento la demanda real, es decir, el proceso de producción inicia al momento de confirmar el pedido, de tal manera que no genere existencias permanentes.
      .row.col-xl-11.m-auto(titulo="Flujo <em>pull</em>")
        p Es también llamado método de fabricación de existencias, el cual consiste en producir de conformidad con la proyección real del mercado. Generalmente, es utilizado en mercancías solicitadas por encargo o están sujetas a personalización.
      .row.col-xl-11.m-auto(titulo="Flujo tenso")
        p Básicamente, es el suministro de la materia prima y los productos terminados en el momento que son requeridos, por lo cual recibe el nombre #[em just in time]. De tal manera que las existencias almacenadas son reducidas al mínimo y proporciona una idea más cercana a la demanda real, ayudando al abastecimiento expedito de los puntos de venta.
      .row.col-xl-11.m-auto(titulo="Flujo sincrónico")
        p Se refiere al suministro de una significativa variedad de materiales y porciones de productos según se desenvuelve el proceso de producción, con el fin de disminuir los costos de inventarios.
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_3_2 3.2  Producción
    
    .col-xl-8.col-lg-10.m-auto
      .row
        .col-lg-6.mb-4.mb-md-0.col-md-6(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/2.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
        .col-lg-6.col-md-6(style="place-self:center;")
          .cont_3_1
            p(data-aos="zoom-in-left") Según Economipedia (2021), la logística de producción, “#[strong trata de que la transformación de los aprovisionamientos (mercancías, materias primas o suministros) pase de una fase a otra de transformación de forma eficiente hasta la consecución del producto final]” en conclusión, este proceso optimiza los recursos que se tienen para transformar las materias primas y su posterior almacenamiento.

    p.mt-5(data-aos="zoom-in") La logística de producción presenta las siguientes características:

    ul.lista-ul--separador.mt-4
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Analiza, planifica y gestiona el flujo de productos desde la cantidad de materias primas deben ser adquiridas para crear las mercancías, así mismo la distribución a través del proceso productivo.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Suministro, abastecimiento, mantenimiento y seguridad industrial.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Programa y planifica el abastecimiento, analiza la productividad empresarial de los diferentes equipos de trabajo, el funcionamiento de la maquinaria, las instalaciones y demás componentes físicos de la empresa.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Entregar el producto correcto de acuerdo con las condiciones, tiempos y lugar inicialmente pactados con el cliente.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Acciones coordinadas orientadas a la comunicación y formulación de objetivos en la gestión del flujo de materiales.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Optimiza la transformación de elementos, desarrollar nuevos procedimientos de producción o adapta los actuales a las nuevas necesidades de la empresa. Lo importante es encontrar una óptima relación costo/beneficio.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Transporta los productos desde adentro de las instalaciones y hacia afuera en su destino final
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Transforma manteniendo los estándares exigidos por las normas de calidad.


    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_3_3 3.3  Distribución
    
    p(data-aos="zoom-in") La logística de distribución tiene dentro de sus funciones planificar, implementar y controlar los movimientos físicos de materias primas transformadas desde el lugar de fabricación hasta el consumidor final y mantiene una sincronía con la distribución y el proceso de entrega. 

    p.mt-4(data-aos="zoom-in") Su objetivo está orientado a:

    .cont_3_2.pt-4.pb-4
      .row.m-0
        .col-lg-3.mb-4.mb-md-0.mt-md-5.p-md-4.col-md-6
          div(style="position:relative;" data-aos="zoom-in-up")
            .text-center.p-4(style="background-color:#FE7062;border:1px #707070 solid;border-radius:20px 20px 0px 0px;")
              figure.text-center
                img(src="@/assets/curso/tema3/4.svg" style="display:inline;max-width:100px;" alt="Imagen decorativa")
            .bg-white.p-4(style="border:1px #707070 solid;border-radius:0px 0px 20px 20px;position:relative;border-top:0;")
              span.text-white(style="font-size:35px;background-color:#FE7062;position:absolute;left:-25px;border-radius:10px;padding:0rem 1rem;font-weight:bold;top:10px") 1
              h4.text-center(style="color:#FE7062;") Transportar
              .d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema3/5.svg" style="max-width:40px;position:absolute;right:-40px;" alt="Imagen decorativa")
              p.mt-4.mb-0 Proceso indispensable para movilizar las mercancías. Es la actividad primordial en la distribución física del sitio de transformación de la materia prima al lugar de consumo.
        .col-lg-3.mb-4.mb-md-0.p-md-4.col-md-6
          div(style="position:relative;" data-aos="zoom-in-down")
            .text-center.p-4(style="background-color:#57DBD8;border:1px #707070 solid;border-radius:20px 20px 0px 0px;")
              figure.text-center
                img(src="@/assets/curso/tema3/6.svg" style="display:inline;max-width:100px;" alt="Imagen decorativa")
            .bg-white.p-4(style="border:1px #707070 solid;border-radius:0px 0px 20px 20px;position:relative;border-top:0;")
              span.text-white(style="font-size:35px;background-color:#57DBD8;position:absolute;left:-25px;border-radius:10px;padding:0rem 1rem;font-weight:bold;top:10px") 2
              h4.text-center(style="color:#57DBD8;") Fraccionar
              .d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema3/7.svg" style="max-width:40px;position:absolute;right:-40px;" alt="Imagen decorativa")
              p.mt-4.mb-0 Acción orientada a ubicar las mercancías en las condiciones del mercado.
        .col-lg-3.mb-4.mb-md-0.mt-md-5.p-md-4.col-md-6
          div(style="position:relative;" data-aos="zoom-in-up")
            .text-center.p-4(style="background-color:#91B3FA;border:1px #707070 solid;border-radius:20px 20px 0px 0px;")
              figure.text-center
                img(src="@/assets/curso/tema3/8.svg" style="display:inline;max-width:100px;" alt="Imagen decorativa")
            .bg-white.p-4(style="border:1px #707070 solid;border-radius:0px 0px 20px 20px;position:relative;border-top:0;")
              span.text-white(style="font-size:35px;background-color:#91B3FA;position:absolute;left:-25px;border-radius:10px;padding:0rem 1rem;font-weight:bold;top:10px") 3
              h4.text-center(style="color:#91B3FA;") Almacenar
              .d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema3/9.svg" style="max-width:40px;position:absolute;right:-40px;" alt="Imagen decorativa")
              p.mt-4.mb-0 Pone a disposición productos después de la fabricación hasta el momento de su distribución.
        .col-lg-3.mb-4.mb-md-0.p-md-4.col-md-6
          div(style="position:relative;" data-aos="zoom-in-up")
            .text-center.p-4(style="background-color:#1A0F91;border:1px #707070 solid;border-radius:20px 20px 0px 0px;")
              figure.text-center
                img(src="@/assets/curso/tema3/10.svg" style="display:inline;max-width:100px;" alt="Imagen decorativa")
            .bg-white.p-4(style="border:1px #707070 solid;border-radius:0px 0px 20px 20px;position:relative;border-top:0;")
              span.text-white(style="font-size:35px;background-color:#1A0F91;position:absolute;left:-25px;border-radius:10px;padding:0rem 1rem;font-weight:bold;top:10px") 4
              h4.text-center(style="color:#1A0F91;") Informar
              p.mt-4.mb-0 Da a conocer el estado del arte del mercado con el fin de generar estrategias de mejora continua. 
    
    .mt-5.p-3(style="max-width:450px;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 Etapas de la logística de distribución
    
    p.mt-4(data-aos="zoom-in") La logística de distribución presenta las siguientes etapas:

    ul.lista-ul--separador.mt-4
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Órdenes de compra de materias primas.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Mejoramiento de la competitividad en la producción de bienes y servicios.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Garantizar la entrega del bien y servicio producido.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Mejor condición de entrega.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Registro y control de las órdenes de compra.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Conservar las existencias requeridas por el mercado.
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_3_4 3.4 Plan de recursos de distribución
    
    p(data-aos="zoom-in") Los modelos de planificación de las necesidades de distribución (DRP) son una metodología utilizada en la gestión de negocios con el fin de planear las órdenes de productos en la cadena de suministro. El DRP habilita al usuario para establecer ciertos parámetros para el control del inventario (como el inventario de seguridad) y calcular el tiempo de fase entre los requerimientos del inventario (Bravo, Orejuela y Osorio, 2007).
    p.mt-4(data-aos="zoom-in") Entre las funciones principales del DRP se encuentran:

    ul.lista-ul--separador.mt-4
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Planificación y emisión de los pedidos de abastecimiento realizados.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Seguimientos de los pedidos de abastecimiento, con base a un sistema de programación maestra.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Controlar los pedidos que se encuentran en camino entre el almacén de suministro y el de recepción, asignación de suministros.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | Planificación de la cantidad de envíos, cuando se da escasez de un ítem dentro de la red de distribución.
      li(data-aos="zoom-in")
        i.fas.fa-angle-right(style="color:#FE7062;")
        | El DRP cuenta las limitaciones de capacidad con las que pueden encontrarse los distintos centros de distribución.
    
    .col-xl-9.col-lg-10.m-auto.mt-5
      .bloque-texto-a.color-acento-contenido.p-4.p-md-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            h5.mb-0 Tal como lo dice Swamidass (2020) el uso del DRP se determina en:
          .col-lg-8(data-aos="fade-left")
            .bloque-texto-a__texto.p-4
              p Elaborar un plan escalonado de reabastecimiento del inventario para todos los niveles de la cadena de suministro. El sistema DRP proporciona información que identifica las fechas de necesidad, las fechas de reposición y las fechas de pedido para las necesidades materiales. Esta información puede ser unificada dentro del sistema de distribución para proporcionar un conjunto de números para ser utilizados por todos. 
    
    p.mt-5(data-aos="zoom-in") El DRP proporciona las bases para enlazar el sistema de distribución física con el sistema de planificación y control de la fabricación, tal como se observa a continuación: 

    SlyderF.mt-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .h-100.p-4.p-md-5.text-center(style="background-color:#E6FAF9;border-radius:10px;")
        h5 #[em Lead Time]
        p.mt-3 Es el tiempo transcurrido desde que se genera la orden de compra al proveedor de la materia prima hasta la entrega al cliente.
      .h-100.p-4.p-md-5.text-center(style="background-color:#E6FAF9;border-radius:10px;")
        h5 Demanda
        p.mt-3 Es el promedio de unidades solicitadas por unidad de tiempo. Es requerido por cada producto.
      .h-100.p-4.p-md-5.text-center(style="background-color:#E6FAF9;border-radius:10px;")
        h5 Inventario efectivo
        p.mt-3 Es el inventario actual en el almacén, más la cantidad del producto por arribar, menos la cantidad de producto comprometida y pendiente por entregar a los clientes.
      .h-100.p-4.p-md-5.text-center(style="background-color:#E6FAF9;border-radius:10px;")
        h5 Inventario de seguridad
        p.mt-3 Es el inventario efectivo de un producto al momento de realizar una orden de pedido al proveedor de parte del almacén y dispuesto a atender las variaciones de la demanda durante el tiempo de tránsito de la orden. El inventario de seguridad, por tanto, permite atender la variabilidad de la demanda mientras la orden de producto llega finalmente a la bodega, tratando de evitar el agotamiento del producto, además de un mal servicio al cliente.
      .h-100.p-4.p-md-5.text-center(style="background-color:#E6FAF9;border-radius:10px;")
        h5 Variabilidad de la demanda
        p.mt-3 Es la desviación estándar de la demanda, calculada con los datos históricos del producto.
      .h-100.p-4.p-md-5.text-center(style="background-color:#E6FAF9;border-radius:10px;")
        h5 Prioridad de la zona de mercado
        p.mt-3 Resulta de un análisis multicriterio o simplemente de la experiencia de los equipos de trabajo de la empresa.
      .h-100.p-4.p-md-5.text-center(style="background-color:#E6FAF9;border-radius:10px;")
        h5 Inventario máximo
        p.mt-3 Se refiere a la cantidad máxima de cada producto permitido en la bodega. Resulta de las políticas de la empresa, restricciones del espacio o de análisis matemáticos del departamento de almacenaje.
      
</template>

<script>
export default {
  name: 'Tema3',
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
.acordion1 .tarjeta.tarjeta--gris.acordion__activo
  background-color: #E9F0FE
.acordion1 .tarjeta.tarjeta--gris.acordion__activo .acordion__accion__btn--a
  background-color: #1A0F91
  color: #fff
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 70%
  height: 50%
  bottom: -20px
  right: -20px
  background-color: #C3E2FD
.cont_3_2
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/3.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.bloque-texto-a.color-acento-contenido
  background-color: #D3E1FD
.slyder-f__btn i
  font-size: 3rem
  color: #57DBD8
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #b0c0d2
</style>
