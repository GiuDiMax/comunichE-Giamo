document.write("  <!-- ======= Footer ======= -->");
document.write("  <footer id=\"footer\">");
document.write("");
document.write("    <div class=\"footer-top\">");
document.write("      <div class=\"container\">");
document.write("        <div class=\"row\">");
document.write("");
document.write("          <div class=\"col-lg-6 col-md-6 footer-links\">");
document.write("            <h4>Altri link<\/h4>");
document.write("            <ul>");
document.write("              <li><i class=\"bx bx-chevron-right\"><\/i> <a href=\"#\">E\/G Puglia<\/a><\/li>");
document.write("              <li><i class=\"bx bx-chevron-right\"><\/i> <a href=\"#\">Agesci Puglia<\/a><\/li>");
document.write("              <li><i class=\"bx bx-chevron-right\"><\/i> <a href=\"#\">AGESCI<\/a><\/li>");
document.write("            <\/ul>");
document.write("          <\/div>");
document.write("");
document.write("          <div class=\"col-lg-6 col-md-6 footer-links\">");
document.write("            <h4>Seguici sui social<\/h4>");
document.write("            <p>Abbiamo ancora tante storie da raccontare<\/p>");
document.write("            <div class=\"social-links mt-3\">");
// document.write("              <a href=\"#\" class=\"twitter\"><i class=\"bx bxl-twitter\"><\/i><\/a>");
// document.write("              <a href=\"#\" class=\"facebook\"><i class=\"bx bxl-facebook\"><\/i><\/a>");
document.write("              <a href=\"https://www.instagram.com/comuniche_giamo/\" class=\"instagram\"><i class=\"bx bxl-instagram\"><\/i><\/a>");
// document.write("              <a href=\"#\" class=\"google-plus\"><i class=\"bx bxl-skype\"><\/i><\/a>");
// document.write("              <a href=\"#\" class=\"linkedin\"><i class=\"bx bxl-linkedin\"><\/i><\/a>");
document.write("            <\/div>");
document.write("          <\/div>");
document.write("");
document.write("        <\/div>");
document.write("      <\/div>");
document.write("    <\/div>");
document.write("");
document.write("    <div class=\"container footer-bottom clearfix\">");
document.write("      <div class=\"copyright\">");
document.write("        <strong><span>ComunichE\/Giamo<\/span><\/strong>");
document.write("      <\/div>");
document.write("      <div class=\"credits\">");
document.write("        Sito disegnato dagli E\/G di <strong>ComunichE\/Ggiamo<\/strong>");
document.write("      <\/div>");
document.write("    <\/div>");
document.write("  <\/footer><!-- End Footer -->");
document.write("");
document.write("  <div id=\"preloader\"><\/div>");
document.write("  <a href=\"#\" class=\"back-to-top d-flex align-items-center justify-content-center\"><i class=\"bi bi-arrow-up-short\"><\/i><\/a>");
document.write("");
document.write("  <!-- Vendor JS Files -->");
document.write("  <script src=\"assets\/vendor\/aos\/aos.js\"><\/script>");
document.write("  <script src=\"assets\/vendor\/glightbox\/js\/glightbox.min.js\"><\/script>");
document.write("  <script src=\"assets\/vendor\/isotope-layout\/isotope.pkgd.min.js\"><\/script>");
document.write("  <script src=\"assets\/vendor\/swiper\/swiper-bundle.min.js\"><\/script>");
document.write("  <script src=\"assets\/vendor\/waypoints\/noframework.waypoints.js\"><\/script>");
document.write("<!--  <script src=\"assets\/vendor\/php-email-form\/validate.js\"><\/script>-->");
document.write("");
document.write("  <!-- Template Main JS File -->");
document.write("  <script src=\"assets\/js\/main.js\"><\/script>");
document.write("  ");
document.write("	<!-- Cookie JS File -->");
document.write("<!--	<script type=\"text\/javascript\">-->");
document.write("<!--	var _iub = _iub || [];-->");
document.write("<!--	_iub.csConfiguration = {\"askConsentAtCookiePolicyUpdate\":true,\"floatingPreferencesButtonDisplay\":\"bottom-right\",\"perPurposeConsent\":true,\"siteId\":3547238,\"whitelabel\":false,\"cookiePolicyId\":73563270,\"lang\":\"it\", \"banner\":{ \"acceptButtonCaptionColor\":\"#FFFFFF\",\"acceptButtonColor\":\"#0073CE\",\"acceptButtonDisplay\":true,\"backgroundColor\":\"#FFFFFF\",\"closeButtonRejects\":true,\"customizeButtonCaptionColor\":\"#4D4D4D\",\"customizeButtonColor\":\"#DADADA\",\"customizeButtonDisplay\":true,\"explicitWithdrawal\":true,\"listPurposes\":true,\"position\":\"bottom\",\"showTitle\":false,\"textColor\":\"#000000\" }};-->");
document.write("<!--	<\/script>-->");
document.write("<!--	<script type=\"text\/javascript\" src=\"https:\/\/cs.iubenda.com\/autoblocking\/3547238.js\"><\/script>-->");
document.write("<!--	<script type=\"text\/javascript\" src=\"\/\/cdn.iubenda.com\/cs\/iubenda_cs.js\" charset=\"UTF-8\" async><\/script>-->");
document.write("  ");
document.write("  <!-- Template Leaflet Map JS File -->");
document.write("  <script src=\"map.js?v=1.6\"><\/script>");
document.write("");
document.write("<\/body>");
document.write("");
document.write("<\/html>");

document.addEventListener("DOMContentLoaded", (event) => {
    resize()
});

function resize() {
    let h = document.body.clientHeight + 200;
    if (h < 500) { h = 500; }
    if (self == top) {
        console.log("resize to: " + h)
    }
    parent.postMessage({ "function": "resize", "name": "iframe", "h": h }, "https://zone.agesci.it/");
}