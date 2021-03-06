import { useEffect } from "react"
import spotify from "./spotify.png"
import apple from "./apple.png"
import audible from "./audible.png"
import google from "./google.png"
export default function Resources() {
    useEffect(()=>{document.title="Resources | Mental Fitness Therapy"},[])
    return <>
            <div className="page-content"><h2><u>Pregnancy and Postpartum</u></h2>
                <div className="resources">
                    <h3>Postpartum Support International:</h3> <a href="http://www.postpartum.net" rel="noreferrer" target="_blank" >http://www.postpartum.net</a><br /><br />
                    <h3>Postpartum Depression support online:</h3> <a href="http://www.ppdsupportpage.com" rel="noreferrer" target="_blank">http://www.ppdsupportpage.com</a><br /><br />
                    <h3>Las Madres. Support for moms based on the baby’s year of birth. Also has a working moms group.</h3> <a href="http://www.lasmadres.com" rel="noreferrer" target="_blank">http://www.lasmadres.com</a><br /><br />
                    <h3>Postpartum Depression Stress Line<br />
                        Opened 9 am-9pm, PST<br />
                        <a href="tel:18887737090">1-888-773-7090</a></h3><br /><br />
                    <h3>Support for Dads:</h3> <a href="http://www.postpartumdads.org" rel="noreferrer" target="_blank">http://www.postpartumdads.org</a><br /><br />
                    <h3>Gottman Bringing Baby Home Workshops</h3> <a href="https://www.gottman.com/parents/new-parents-workshop/" rel="noreferrer" target="_blank">https://www.gottman.com/parents/new-parents-workshop/</a><br /><br />
                    <h3>Pregnancy and Infant Loss:</h3> <a href="http://www.handonline.org/" rel="noreferrer" target="_blank">http://www.handonline.org/</a><br /><br />
                    <h3>MORE STUFF TBD….</h3>
                </div>
            </div>

            <div className="casts">
                <h2>
                    <u>PODCASTS</u>
                </h2>
                <div className="casts">
                    <div style={{"backgroundColor":"MediumAquaMarine","padding":"1vmin 5vmin 2vmin","borderRadius":"10px","marginBottom":"4vmin"}}>
                        <h2>Tara Brach</h2>
                            <div style={{"display":"flex","justifyContent":"space-between", "columnGap":"3vmin"}}>
                                <a href="https://open.spotify.com/show/37McjD0j2cdu4GExcFQgm0" rel="noreferrer" target="_blank"><img src={spotify} alt="spotify link" height="40" /></a>
                                <a href="https://podcasts.apple.com/us/podcast/tara-brach/id265264862" rel="noreferrer" target="_blank"><img src={apple} alt="apple link" height="40" /></a>
                                <a href="https://podcasts.google.com/feed/aHR0cDovL3RhcmFicmFjaC5saWJzeW4uY29tL3Jzcw==" rel="noreferrer" target="_blank"><img src={google} alt="google link" height="40" /></a>
                                <a href="https://www.audible.com/author/Tara-Brach/B001KE8BHO" rel="noreferrer" target="_blank"><img src={audible} alt="audible link" height="41" /></a>
                            </div>
                    </div>
                    <div style={{"backgroundColor":"MediumAquaMarine","padding":"1vmin 5vmin 2vmin","borderRadius":"10px","marginBottom":"4vmin"}}>
                        <h2>Where Should We Begin?</h2>
                            <div style={{"display":"flex","justifyContent":"space-between","columnGap":"3vmin"}}>
                                <a href="https://open.spotify.com/show/3fKOTwtnX5oZLaiNntKWAV" rel="noreferrer" target="_blank"><img src={spotify} alt="spotify link" height="40" /></a>
                                <a href="https://podcasts.apple.com/us/podcast/where-should-we-begin-with-esther-perel/id1237931798" rel="noreferrer" target="_blank"><img src={apple} alt="apple link" height="40" /></a>
                                <a href="https://podcasts.google.com/feed/aHR0cDovL2VzdGhlci5hdWRpYmxlLmxpYnN5bnByby5jb20vcnNz" rel="noreferrer" target="_blank"><img src={google} alt="google link" height="40" /></a>
                                <a href="https://www.audible.com/pd/Where-Should-We-Begin-with-Esther-Perel-Podcast/B08DDCJ44L" rel="noreferrer" target="_blank"><img src={audible} alt="audible link" height="41" /></a>
                            </div>
                    </div>
                    <div style={{"backgroundColor":"MediumAquaMarine","padding":"1vmin 5vmin 2vmin","borderRadius":"10px","marginBottom":"4vmin"}}>
                        <h2>Shrink Rap Radio</h2>
                            <div style={{"display":"flex","justifyContent":"space-between","columnGap":"3vmin"}}>
                                <a href="https://open.spotify.com/show/3pfGEC84F7SJZLUmDaYidv" rel="noreferrer" target="_blank"><img src={spotify} alt="spotify link" height="40" /></a>
                                <a href="https://podcasts.apple.com/us/podcast/shrink-rap-radio/id79491957" rel="noreferrer" target="_blank"><img src={apple} alt="apple link" height="40" /></a>
                                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5wb2RjYXN0bWlycm9yLmNvbS9zaHJpbmstcmFwLXJhZGlv" rel="noreferrer" target="_blank"><img src={google} alt="google link" height="40" /></a>
                                <a href="https://www.audible.com/pd/Podcast/B08JJNYVV1" rel="noreferrer" target="_blank"><img src={audible} alt="audible link" height="41" /></a>
                            </div>
                    </div>
                    <div style={{"backgroundColor":"MediumAquaMarine","padding":"1vmin 5vmin 2vmin","borderRadius":"10px","marginBottom":"4vmin"}}>
                        <h2>Better Sex Podcast</h2>
                            <div style={{"display":"flex","justifyContent":"space-between","columnGap":"3vmin"}}>
                                <a href="https://open.spotify.com/show/6W4PJ6NB8akNyzaGUZGW0X" rel="noreferrer" target="_blank"><img src={spotify} alt="spotify link" height="40" /></a>
                                <a href="https://podcasts.apple.com/us/podcast/better-sex/id1329973865" rel="noreferrer" target="_blank"><img src={apple} alt="apple link" height="40" /></a>
                                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvMjc5NDE3Mi9lcGlzb2Rlcy9mZWVk" rel="noreferrer" target="_blank"><img src={google} alt="google link" height="40" /></a>
                                <a href="https://www.audible.com/author/Jessa-Zimmerman/B07G1T8Y16?ref=a_author_Je_c19_lAuthor_1_1_1&amp;pf_rd_p=1ae0e65e-ad09-4aa7-aa73-772cefb1b5e1&amp;pf_rd_r=G1NHM3CN96S7R6NQX0Z9" rel="noreferrer" target="_blank"><img src={audible} alt="audible link" height="41" /></a>
                            </div>
                    </div>
                    <div style={{"backgroundColor":"MediumAquaMarine","padding":"1vmin 5vmin 2vmin","borderRadius":"10px","marginBottom":"4vmin"}}>
                        <h2>Attachment Theory in Action</h2>
                            <div style={{"display":"flex","justifyContent":"space-between","columnGap":"3vmin"}}> 
                                <a href="https://open.spotify.com/show/72FDvKx9GoPXApdaT1VdfH" rel="noreferrer" target="_blank"><img src={spotify} alt="spotify link" height="40" /></a>
                                <a href="https://podcasts.apple.com/tr/podcast/attachment-theory-in-action-with-karen-doyle-buckwalter/id1305291387" rel="noreferrer" target="_blank"><img src={apple} alt="apple link" height="40" /></a>
                                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hdHRhY2htZW50dGhlb3J5aW5hY3Rpb24ucG9kYmVhbi5jb20vZmVlZC54bWw" rel="noreferrer" target="_blank"><img src={google} alt="google link" height="40" /></a>
                                <a href="https://www.audible.com/pd/Attachment-Theory-in-Action-with-Karen-Doyle-Buckwalter-Podcast/B08JJNG8SC" rel="noreferrer" target="_blank"><img src={audible} alt="audible link" height="41" /></a>
                            </div>
                    </div>
                    <div style={{"backgroundColor":"MediumAquaMarine","padding":"1vmin 5vmin 2vmin","borderRadius":"10px","marginBottom":"4vmin"}}>
                        <h2>The Skillful Podcast</h2>
                            <div style={{"display":"flex","justifyContent":"center", "columnGap":"3vmin"}}>
                                <a href="https://open.spotify.com/show/0CYO75hjiJIBstRpvWZKCa?autoplay=true" rel="noreferrer" target="_blank"><img src={spotify} alt="spotify link" height="40" /></a>
                                <a href="https://podcasts.apple.com/us/podcast/the-skillful-podcast/id1461774020" rel="noreferrer" target="_blank"><img src={apple} alt="apple link" height="40" /></a>
                                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly90aGVza2lsbGZ1bGxwb2RjYXN0LmxpYnN5bi5jb20vcnNz" rel="noreferrer" target="_blank"><img src={google} alt="google link" height="40" /></a>
                            </div>
                    </div>
                    <div style={{"backgroundColor":"MediumAquaMarine","padding":"1vmin 5vmin 2vmin","borderRadius":"10px","marginBottom":"4vmin"}}>
                        <h2>The Mindful Podcast</h2>
                            <div style={{"display":"flex","justifyContent":"center"}}>
                            <a href="https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6NjUwMTY5MTYvc291bmRzLnJzcw?ep=14" rel="noreferrer" target="_blank"><img src={google} alt="google link" height="40" /></a>
                            </div>
                    </div>
                    <h3>MORE STUFF TBD….</h3>
                </div>
            </div>
            <div className="page-content">
                <h1><u>BOOKS</u></h1><br />
                <div className="resources">
                    <h2><u>Relationships</u></h2>
                    <h3>Attached </h3><br />
                    <h3>Gottmans</h3><br />
                    <h3>Hold Me Tight</h3><br />
                    <h3>Feeling Good Together</h3><br />
                    <h3>How To Be An Adult in Relationships -David Richo</h3><br />
<br />
                    <h2><u>Postpartum &amp; Parenting</u></h2>
                    <h3>Beyond the Blues</h3><br />
                    <h3>Dropping the Baby and Other Scary Thoughts: Breaking the Cycle of Unwanted Thoughts in Motherhood -Karen Kleiman</h3><br />
                    <h3>This Isn’t What I Expected -Karen Kleiman</h3><br />
                    <h3>The Happiest Baby on the Block -Harvey Karp</h3><br />
                    <h3>The Whole Brain Child -Daniel Seigel</h3><br />
                    <h3>Why Love Matters -Sue Gerhardt</h3><br />
                    <h3>How to Talk So Kids Will Listen and Listen So Kids Will Talk</h3><br />
                    <h3>Parenting with Love and Logic</h3><br />
                    <h3>Far From the Tree -Andrew Solomon</h3><br />
<br />
                    <h2><u>Depression and Anxiety</u></h2>
                    <h3>Feeling Good -David Burns</h3><br />
                    <h3>When Panic Attacks -David Burns</h3><br />
                    <h3>Conquer Your Critical Inner Voice -Robert and Lisa Firestone</h3><br />
<br />
                    <h2><u>Trauma</u></h2>
                    <h3>The Body Keeps the Score -Bessel van der Kolk</h3><br />
                    <h3>The Body Remembers -Babette Rothchild</h3><br />
                    <h3>Waking the Tiger -Peter Levine</h3><br />
                    <h3>Trauma and Memory: Brain and Body in Search of a Hidden Past -Peter Levine</h3><br />
                    <h3>Trauma and Recovery -Judith Herman</h3><br />
                    <h3>Man’s Search for Meaning -Victor Frankel</h3><br />
                    <h3>Drama of the Gifted Child -Alice Miller</h3><br />
                    <h3>ACEs study</h3><br />
<br />
                    <h2><u>Shame Resiliency</u></h2>
                    <h3>I Thought It Was Just Me -Brené Brown</h3><br />
                    <h3>Rising Strong -Brené Brown</h3><br />
<br />
                    <h2><u>Mindfulness</u></h2>
                    <h3>The Miracle of Mindfulness -Thich Nhat Khan </h3><br />
                    <h3>When Things Fall Apart -Pema Chodron</h3><br />
                    <h3>The Power of Now -Eckhart Tolle</h3><br />
                    <h3>Wherever You Go There You Are -Jon Kabat-Zinn</h3><br />
                    <h3>Self-Compassion -Kristen Neff</h3><br /> 
                    <h3>Focusing -Eugene Gendlin</h3><br />
                    <h3>Tara Brach </h3><br />
                    <h3>Aware -Dan Siegel</h3><br />
                    <h3>Be Here Now -Ram Dass</h3><br />

                </div>
            </div>
            </>
}