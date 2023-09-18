<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in") Es necesario monitorear de cerca el flujo de la operación logística, siguiendo la política de distribución establecida. Esto implica supervisar el transporte, el almacenamiento y la entrega de las mercancías, asegurándose de que se cumplan los plazos y requisitos acordados. En caso de desviaciones o problemas, se deben tomar medidas correctivas de manera oportuna para garantizar un flujo eficiente de la mercancía.
    p.mb-5(data-aos="zoom-in") En resumen, #[strong coordinar el flujo de mercancía] implica identificar los recursos, proyectar los requerimientos, cumplir con la normativa legal y monitorear de cerca la operación logística. Al hacerlo, se puede asegurar una cadena de suministro efectiva y optimizada, lo que contribuye a aumentar la productividad y competitividad de las empresas. A continuación, se presenta un esquema que aborda estos aspectos.

    .row.justify-content-center
      .col-xl-12.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con la coordinación del flujo de mercancías, la cual se compone de: Requerimientos basados en: Necesidades. Sistemas de distribución. TIC. Sistemas de gestión de calidad. Operaciones logísticas que facilitan: Procesos logísticos. Producción. Distribución. Plan de recursos de distribución. Sistemas de información que requieren: Gestión de transporte. Seguimiento a los productos. Trazabilidad en los procesos logísticos. Cumplimiento de los requisitos. Indicadores de gestión." data-aos="zoom-in-up")
      .col-auto(data-aos="fade-right")
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
