export default function Footer() {
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    return <>
            <div className="footer">
                <footer>
                    footer content<br />
                    <button onClick={scrollToTop}>Back to top</button>
                </footer>
            </div>
            </>
}