import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className="bg-white shadow py-8 border">
      <div className="container mx-auto px-4">
        <Grid container spacing={4}>
          {/* Explore Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Explore
            </Typography>
            <nav>
              <ul>
                <li>
                  <Link href="#">Paintings</Link>
                </li>
                <li>
                  <Link href="#">Canvas</Link>
                </li>
                <li>
                  <Link href="#">Digital Art</Link>
                </li>
                <li>
                  <Link href="#">Sculpture</Link>
                </li>
              </ul>
            </nav>
          </Grid>

          {/* Shop Section */}
          <Grid item xs={12} md={4} className="text-center">
            <Typography variant="h6" gutterBottom>
              Shop
            </Typography>
            <nav>
              <ul>
                <li>
                  <Link href="#">Browse Artworks</Link>
                </li>
                <li>
                  <Link href="#">Featured Artists</Link>
                </li>
                <li>
                  <Link href="#">Sale</Link>
                </li>
                <li>
                  <Link href="#">Gift Cards</Link>
                </li>
              </ul>
            </nav>
          </Grid>

          {/* About Art Gallery Section */}
          <Grid item xs={12} md={4} className="text-end">
            <Typography variant="h6" gutterBottom>
              About Art Gallery
            </Typography>
            <nav>
              <ul>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Events</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </nav>
          </Grid>
        </Grid>

        <Typography variant="h6" className="mt-8 text-center pt-5">
          Connect
        </Typography>
        <div className="flex justify-center space-x-5 mt-4">
          <Link href="#" className="flex items-center mx-2">
            <FacebookIcon /> <span className="ml-1">Facebook</span>
          </Link>
          <Link href="#" className="flex items-center mx-2">
            <TwitterIcon /> <span className="ml-1">Twitter</span>
          </Link>
          <Link href="#" className="flex items-center mx-2">
            <InstagramIcon /> <span className="ml-1">Instagram</span>
          </Link>
          <Link href="#" className="flex items-center mx-2">
            <PinterestIcon /> <span className="ml-1">Pinterest</span>
          </Link>
          <Link href="#" className="flex items-center mx-2">
            <LinkedInIcon /> <span className="ml-1">LinkedIn</span>
          </Link>
        </div>

        <Typography variant="body1" className="mt-8 text-center pt-5">
          &copy; {new Date().getFullYear()} ArtGallery. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
