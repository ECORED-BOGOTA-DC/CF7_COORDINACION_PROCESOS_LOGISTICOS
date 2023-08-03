<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in") Es necesario monitorear de cerca el flujo de la operación logística, siguiendo la política de distribución establecida. Esto implica supervisar el transporte, el almacenamiento y la entrega de las mercancías, asegurándose de que se cumplan los plazos y requisitos acordados. En caso de desviaciones o problemas, se deben tomar medidas correctivas de manera oportuna para garantizar un flujo eficiente de la mercancía.
    p.mb-5(data-aos="zoom-in") En resumen, coordinar el flujo de mercancía implica identificar los recursos, proyectar los requerimientos, cumplir con la normativa legal y monitorear de cerca la operación logística. Al hacerlo, se puede asegurar una cadena de suministro efectiva y optimizada, lo que contribuye a aumentar la productividad y competitividad de las empresas. A continuación, se presenta un esquema que aborda estos aspectos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt" data-aos="zoom-in-up")
      .col-auto
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
