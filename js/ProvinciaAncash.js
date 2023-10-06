const getParticipacionTotal = async() => {
    const data = await fetch (`https://oaemdl.es/onpe_sweb_php/participacion/Nacional/Ancash`)
    console.log(data)
    if ( data.status == 200 ) {
        const provincia = await ( data.json() )
        html = `
          <tbody> 
            <div class="col-xs-12">
            <p class="subtitle">Consulta de participación DETALLADO </p>
              <div id="page-wrap">
                <table class="table21">
                  <tbody id="resultados">
                    <tr class="titulo_tabla">
                      <td>DEPARTAMENTO</td>
                      <td>TOTAL ASISTENTES</td>
                      <td>% TOTAL ASISTENTES</td>
                      <td>TOTAL AUSENTES</td>                      
                      <td>% TOTAL AUSENTES</td>
                      <td>ELECTORES HÁBILES</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </tbody> 
        `
        provincia.forEach( votos => {
          html += `
            <table class="table21">
              <tr onclick="location.href='DistritosAncash.html'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
                <td>${votos.DPD}</td>
                <td>${votos.TV}</td>
                <td>${votos.PTV}</td>
                <td>${votos.TA}</td>
                <td>${votos.PTA}</td>
                <td>${votos.EH}</td>
              </tr>
              `
          });
        document.getElementById ( 'divDetalle' ).innerHTML = html;
    }
}
getParticipacionTotal();