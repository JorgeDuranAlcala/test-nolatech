import { Box, Button, Typography } from '@mui/material'
import { Grid, TextField } from '@mui/material'
import { Carousel } from 'react-responsive-carousel';
import { Instagram, Facebook, Twitter, YouTube, WhatsApp } from '@mui/icons-material'

const imgUrl = new URL('/Prb Header.png', import.meta.url).href
const personImg = new URL('/Pic5.png', import.meta.url).href
const person2Img = new URL('/Join Us.png', import.meta.url).href
const bgImg = new URL('/Pic6.png', import.meta.url).href
const pic7 = new URL('/Pic7.png', import.meta.url).href
const pic8 = new URL('/Pic8.png', import.meta.url).href
const pic9 = new URL('/Pic9.png', import.meta.url).href
const pic10 = new URL('/Pic10.png', import.meta.url).href
const pic2 = new URL('/Pic2.png', import.meta.url).href
const pic3 = new URL('/Pic3.png', import.meta.url).href
const pic4 = new URL('/Pic4.png', import.meta.url).href
const pic1 = new URL('/Pic1.png', import.meta.url).href




export function MainPage() {
  return (

    <Box display={"flex"} flexDirection={"column"} width={'100%'} height={'100vh'} sx={{ position: 'relative' }}>

      <Box display={"flex"} gap={2} justifyContent={'center'} alignItems={"center"} width={'100%'} sx={{ backgroundColor: "green", color: "#fff" }}>
          <Box sx={{ backgroundColor: "red", paddingX: 4, paddingY: 2 }} >LIVE</Box>
          <Box>Lorem Ipsum dolor sit armet</Box>
          <Box sx={{ backgroundColor: "darkgreen", paddingX: 4, paddingY: 2 }}>JOIN NOW</Box>
      </Box>
      <Box sx={{ position: "fixed", backgroundColor: "lightgray", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", right: 40, bottom: "10%", zIndex: 9999 }}>
        <div style={{ padding: 10, border: "1px solid #000"}}>
          <Instagram sx={{ color: "#fff", fontSize: 40 }} />
        </div>
        <div style={{ padding: 10, border: "1px solid #000"}}>
          <Facebook sx={{ color: "#fff", fontSize: 40 }} />
        </div>
        <div style={{ padding: 10, border: "1px solid #000"}}>
          <Twitter sx={{ color: "#fff", fontSize: 40 }}/>
        </div>
        <div style={{ padding: 10, border: "1px solid #000"}}>
          <YouTube sx={{ color: "#fff", fontSize: 40 }}/>
        </div>
        <div style={{ padding: 10, border: "1px solid #000"}}>
          <WhatsApp sx={{ color: "#fff", fontSize: 40 }}/>
        </div>
      </Box>
      <main className="main">
          <Box display={"flex"} className="background-image" width={'100%'} height={'100vh'} style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}>
            <Box display={"flex"} flex={0.4}></Box>
            <Box display={"flex"} flexDirection={"column"} sx={{ zIndex: 9999 }}  flex={0.6}>
                <Box display={"flex"} sx={{ marginTop: 10, marginBottom: 10 }}>
                  <ul style={{ listStyle: "none", display: "flex", gap: 20, padding: 0, margin: 0, color: "#fff"  }}>
                    <li style={{ marginLeft: 2 }}><a style={{ textDecoration: "none", color: "#fff", fontSize: 20, fontWeight: "bold", cursor: "pointer" }}href="#">Lorem Ipsum</a></li>
                    <li style={{ marginLeft: 2 }}><a style={{ textDecoration: "none", color: "#fff", fontSize: 20, fontWeight: "bold", cursor: "pointer" }}href="#">Lorem Ipsum</a></li>
                    <li style={{ marginLeft: 2 }}><a style={{ textDecoration: "none", color: "#fff", fontSize: 20, fontWeight: "bold", cursor: "pointer" }}href="#">Lorem Ipsum</a></li>
                    <li style={{ marginLeft: 2 }}><a style={{ textDecoration: "none", color: "#fff", fontSize: 20, fontWeight: "bold", cursor: "pointer" }}href="#">Lorem Ipsum</a></li>
                    <li style={{ marginLeft: 2 }}><a style={{ textDecoration: "none", color: "#fff", fontSize: 20, fontWeight: "bold", cursor: "pointer" }}href="#">Lorem Ipsum</a></li>
                    <li style={{ marginLeft: 2 }}><a style={{ textDecoration: "none", color: "#fff", fontSize: 20, fontWeight: "bold", cursor: "pointer" }}href="#">Lorem Ipsum</a></li>

                  </ul>
                </Box>
                <Box display={"flex"} gap={2} flexDirection={"column"} justifyContent={"center"} >
                    <h1 style={{ color: "#fff", fontSize: 60}}>Lorem Ipsum</h1>
                    <h1 style={{ color: "#000", fontSize: 60}}>
                      <span style={{ backgroundColor: "#fff" }}>Lorem Ipsum Dolor</span>
                    </h1>
                    <h1 style={{ color: "#fff", fontSize: 60}}>Lorem Ipsum</h1>
                    <Button sx={{ width: 200, background: "green", padding: "15px", marginTop: 5, color: "#fff", fontWeight: "bold", textTransform: "uppercase" }} variant="contained">WHAT IS NEXT</Button>
                </Box>
            </Box>
          </Box>
          <Box display={"flex"} padding={10} style={{ backgroundColor: 'green' }}>
            <Box flex={0.5} paddingLeft={4} paddingRight={4} sx={{ justifyContent: "center", alignItems: "center"}}>
                <h1 style={{ marginBottom: 40, color: "#fff"}}>Lorem Ipsum dolor sit amet</h1>
            </Box>
            <Box display={"flex"} gap={2} flex={0.5}>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingX: 6, borderRight: "2px solid #fff" }}>
                <h3 style={{ fontSize: 60, color: "#fff" }}>170</h3>
                <p style={{ color: "#fff" }}>Days</p>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingX: 6, borderRight: "2px solid #fff" }}>
                <h3 style={{ fontSize: 60, color: "#fff" }}>13</h3>
                <p style={{ color: "#fff" }}>Hours</p>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingX: 6, borderRight: "2px solid #fff" }}>
                <h3 style={{ fontSize: 60, color: "#fff" }}>39</h3>
                <p style={{ color: "#fff" }}>Minutes</p>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingX: 6, borderRight: "2px solid #fff" }}>
                <h3 style={{ fontSize: 60, color: "#fff" }}>29</h3>
                <p style={{ color: "#fff" }}>Seconds</p>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} padding={10} width={'100%'} height={'100vh'}>
            <Box flex={0.5} paddingLeft={4} paddingRight={4} sx={{ justifyContent: "center", alignItems: "center"}}>
                <h1 style={{ marginBottom: 40}}>Lorem Ipsum <br/> dolor sit amet</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </Box>
            <Box flex={0.5}>
               <img src={pic1} width={'100%'} height="100%" alt="hero image" />
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} padding={10} sx={{ paddingBottom: 20, backgroundColor: "#e1e8f1" }} width={'100%'} minHeight={'100vh'} gap={10}>
            <Box display={"flex"} justifyContent="center" alignItems={"center"} paddingLeft={4} paddingRight={4} >
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"60%"}>
                    <h1 style={{ marginBottom: 20}}>Lorem Ipsum <br/> dolor sit amet</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>                    
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", justifyContent: "center" }}>
               <Card image={pic2} title='Lorem Ipsum' />
               <Card image={pic3} title='Lorem Ipsum' />
               <Card image={pic4} title='Lorem Ipsum' />
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center" }}>
                <Button sx={{ background: "inherit", border: "2px solid #000", color: "#000", fontWeight: "bold" }} variant="contained">Learn More</Button>
            </Box>
          </Box>
          <Box display={"flex"} width={'100%'} minHeight={'100vh'}>
            <Box flex={0.3} paddingLeft={4} paddingRight={4} sx={{ justifyContent: "center", alignItems: "center", backgroundColor: "green", padding: 15}}>
                 <Box display={"flex"} flexDirection={"column"} gap={2} padding={6} justifyContent="center" alignItems={"center"} sx={{ width: 500 }}>
                    <h1 style={{ height: "80%", fontSize: 60, color: "#fff" }}>Lorem Ipsum <br/> dolor sit amet <br/> consetetur</h1>
                    <Button fullWidth sx={{ background: "#fff", padding: "15px", border: "2px solid #fff", color: "#000", fontWeight: "bold", textTransform: "uppercase" }} variant="contained">Lorem Ipsum dolor sit</Button>
                    <Button fullWidth sx={{ background: "inherit", padding: "15px", border: "2px solid #fff", color: "#fff", fontWeight: "bold", textTransform: "uppercase" }} variant="contained">Lorem Ipsum dolor sit</Button>
                </Box>
            </Box>
            <Box flex={0.7}>
               <img src={personImg} width={'100%'} height="100%" alt="hero image" />
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} padding={10} sx={{ paddingBottom: 20 }} width={'100%'} minHeight={'100vh'} gap={10}>
            <Box display={"flex"} justifyContent="center" alignItems={"center"} paddingLeft={4} paddingRight={4} >
                <Box display={"flex"} flexDirection={"column"}>
                    <h1 style={{ marginBottom: 20}}>Latest videos</h1>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", justifyContent: "center" }}>
               <Video image={imgUrl} title='Lorem Ipsum dolor sit amet' />
               <Video image={imgUrl} title='Lorem Ipsum dolor sit amet' />
               <Video image={imgUrl} title='Lorem Ipsum dolor sit amet' />
               <Video image={imgUrl} title='Lorem Ipsum dolor sit amet' />
               <Video image={imgUrl} title='Lorem Ipsum dolor sit amet' />
               <Video image={imgUrl} title='Lorem Ipsum dolor sit amet' />
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center" }}>
                <Button sx={{ background: "inherit", border: "2px solid #000", color: "#000", fontWeight: "bold" }} variant="contained">Learn More</Button>
            </Box>
          </Box>
          <Box display={"flex"} width={'100%'} minHeight={'100vh'} style={{ backgroundImage: `url(${person2Img})`, backgroundSize: 'cover', backgroundPosition: "center center" }}>
                <Box display="flex" flex={0.5}></Box>
                <Box display="flex" flexDirection="column" flex={0.5}>
                    <h1 style={{ marginBottom: 20, color: "#fff", fontSize: 60}}>JOIN US.</h1>
                    <p style={{ color: "#fff", margin: "20px 0 40px 0" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Form/>
                    <p style={{ color: "#fff", margin: "20px 0 40px 0", width: 600 }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                </Box>
          </Box>
          <Box display={"flex"} width={'100%'} minHeight={'100vh'} sx={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
            <Box flex={0.3} paddingLeft={4} paddingRight={4} sx={{ justifyContent: "center", alignItems: "center", padding: 15}}>
                 <Box display={"flex"} flexDirection={"column"} gap={2} padding={6} justifyContent="center" alignItems={"center"} sx={{ width: 500 }}>
                    <h1 style={{ height: "80%", fontSize: 60, color: "#000" }}>Lorem Ipsum <br/> dolor sit amet <br/> consetetur</h1>
                    <p style={{ color: "#000", margin: "20px 0 40px 0" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Button fullWidth sx={{ background: "green", padding: "15px", color: "#fff", fontWeight: "bold", textTransform: "uppercase" }} variant="contained">Lorem Ipsum dolor sit</Button>
                </Box>
            </Box>
            <Box flex={0.7}>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} width={'100%'} minHeight={'100vh'} sx={{ backgroundColor: "green" }}>
            <Box display={"flex"} paddingLeft={4} paddingRight={4} sx={{ justifyContent: "center", alignItems: "center"}}>
                <h1 style={{ margin: 40, color: "#fff"}}>Lorem Ipsum dolor sit amet</h1>
            </Box>
            <Box display={"flex"} justifyContent="center" alignItems={"center"} paddingLeft={4} paddingRight={4} >
                <Box display={"flex"} flexDirection={"column"} width={"60%"}>
                  <Carousel showThumbs={false} dynamicHeight>
                          <img src={pic7} width={300} height={500} />
                          <img src={pic8} width={300} height={500} />
                          <img src={pic9} width={300} height={500} />
                          <img src={pic10} width={300} height={500} />
                  </Carousel>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent="center" alignItems={"center"} paddingLeft={4} paddingRight={4} sx={{ marginTop: 10, marginBottom: 10 }}>
                <Button sx={{ background: "#fff", paddingY: 3,  paddingRight: 10, paddingLeft: 10, border: "2px solid #fff", color: "#000", fontWeight: "bold", textTransform: "uppercase" }} variant="contained">VIEW ALL</Button>
            </Box>
          </Box>
          <Box display={"flex"} width={'100%'} minHeight={'20vh'} sx={{ backgroundColor: "#e0e0e0", padding: 5}}>
            <Box display={"flex"} flex={0.3} padding={4} sx={{ fontWeight: "bold" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda laudantium dicta cum mollitia animi error, harum aliquid minima dolorem voluptates eum voluptatibus sequi eveniet omnis! Officia dolore pariatur modi ipsum.</Box>
            <Box display={"flex"} flex={0.6} ></Box>
            <Box display={"flex"} flex={0.1} padding={4} >
              <p style={{ width:170, fontWeight: "bold" }}>
              All right reserved to lorem ipsum© 2022
              </p>
            </Box>
          </Box>
      </main>
    </Box>

  )
}


function Card({ image, title }:{image: string, title: string}) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: 400,
        overflow: 'hidden',
      }}>
        <Box sx={{
          width: '100%',
          height: '90%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <Box sx={{
          width: '100%',
          height: '10%',
          display: 'flex',
          justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
        }}>
          <Typography sx={{ color: "#fff", textTransform: "uppercase" }} variant="h6" gutterBottom>
            {title}
          </Typography>
        </Box>
      </Box>
    );
  }

  function Video({ image, title }:{image: string, title: string}) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: 200,
        overflow: 'hidden',
      }}>
        <Box sx={{
          width: '100%',
          height: '90%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: "flex",
          justifyContent: "center", 
          alignItems: "center"
        }}>
        </Box>
        <Box sx={{
          width: '100%',
          height: '10%',
          display: 'flex',
          justifyContent: 'center',
            alignItems: 'center',
            marginTop: 2,
        }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        </Box>
      </Box>
    );
  }

  const Form = () => {
    return (
        <>

      <Grid container spacing={1} sx={{ paddingRight: 15 }}>
        <Grid item xs={6}>
          <TextField sx={{ background: "#fff" }} label="Name" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField sx={{ background: "#fff" }}  label="Surname" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField sx={{ background: "#fff" }}  label="Phone" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField sx={{ background: "#fff" }}  label="Email" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField sx={{ background: "#fff" }}  label="Department" fullWidth />
        </Grid>
        <Grid item xs={12}>
        <TextField sx={{ background: "#fff" }}  label="Mensaje" fullWidth />
        </Grid>
      </Grid>
      <Button sx={{ marginTop: 2, width: 300, background: "green", padding: "15px", color: "#fff", fontWeight: "bold", textTransform: "uppercase" }} variant="contained">I'm IN</Button>
      </>
    );
  };