function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <p className="footer-brand">
                    Can I Afford This?
                </p>

                <p className="footer-description">
                    A financial decision-making tool designed
                    to help users evaluate purchases beyond
                    the price tag.
                </p>

                <p className="footer-copyright">
                    © {currentYear} Joshua Brown. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;