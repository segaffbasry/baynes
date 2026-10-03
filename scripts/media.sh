#!/bin/sh
# Builds public/media from the live-site downloads in _scrape (baynes.co.uk, careers.baynes.co.uk and the two
# Bayne's YouTube films Qkf12Zlz3pY and Jd_W8KLqjrk). Photos become WebP; the films are re-encoded without audio
# for the hero loop and with audio for the on-page film.
set -e
cd "$(dirname "$0")/.."
R=_scrape/raw; F=_scrape/film; O=public/media
mkdir -p $O/products
w() { cwebp -quiet -q "${4:-80}" -resize "$3" 0 "$R/$1" -o "$O/$2.webp"; }
w 1.BaynesDay1_4723MorningRolls1_Web.jpg rolls 1800
w 2.BaynesDay2_4885ScotchPies1_Web.jpg scotch-pies 1800
w morning-rolls-portrait.jpg rolls-portrait 1100
w scotch-pies-portrait.jpg pies-portrait 1100
w Baynes-1024x871.jpg stanley-john 1024
w John-Bayne-Stanley-Bayne-Photo-1964.jpg history-1964 634
w John-Bayne-Young-Boy-Photo-1908.jpg history-1908 669
w Lochore-Butcher-Shop-Circa-1920-Landscape-768x512.jpg history-1921 768
w John-Bayne-Joint-Managing-Director-at-Baynes-The-Family-Bakers-Web.jpg john-bayne 1000
w Baynes_Careers_Talos_Header_1.jpg team-counter 2000
w Baynes_Careers_Talos_People_1_2000.jpg people-1 1600
w Baynes_Careers_Talos_People_2_2000.jpg people-2 1600
w Baynes_Careers_Talos_People_3_2000.jpg people-3 1600
w Baynes_Careers_Talos_People_4_2000.jpg people-4 1600
w Baynes_Careers_Talos_People_5.jpg people-5 1600
w Baynes_Careers_Talos_People_6_2000.jpg people-6 1600
w Baynes_Careers_Transport_2000_NEW.jpg transport 1600
w Baynes_Careers_Warehousing_2000.jpg warehouse 1600
w Baynes-App_Web-Banner_Desktop-v1.jpg app-banner 1800
for p in Doughnuts DrinksSoups Filled-Rolls Fresh-Cream-Cakes Hot-Filled-Rolls Teabreads; do cwebp -quiet -q 82 -resize 640 0 -alpha_q 90 "$R/Baynes-Product-$p-800x800-1.png" -o "$O/products/$(echo $p | tr A-Z a-z).webp"; done
for p in Cakes RollsBread Savouries; do cwebp -quiet -q 82 -resize 640 0 "$R/Baynes-Product-Page-$p-800x800-1.png" -o "$O/products/$(echo $p | tr A-Z a-z).webp"; done
cwebp -quiet -q 85 -resize 400 0 $R/Baynesy70roundel.webp -o public/brand/baynesy-70.webp

# Hero loop: text-free cuts from "Striving to be the Nation's Favourite Baker 2024".
S=$F/Qkf12Zlz3pY.mp4
ffmpeg -y -v error \
  -ss 103.6 -t 3.0 -i $S -ss 59.6 -t 2.2 -i $S -ss 109.3 -t 1.6 -i $S -ss 106.7 -t 1.3 -i $S -ss 61.9 -t 1.4 -i $S -ss 114.1 -t 1.6 -i $S \
  -filter_complex "[0:v][1:v][2:v][3:v][4:v][5:v]concat=n=6:v=1:a=0,scale=1280:-2,fps=25,eq=saturation=0.9[v]" -map "[v]" \
  -an -c:v libx264 -crf 25 -preset slow -pix_fmt yuv420p -movflags +faststart $O/hero.mp4
ffmpeg -y -v error -ss 0.2 -i $O/hero.mp4 -frames:v 1 -q:v 3 $O/hero-poster.jpg
# The full film, played on the page with sound.
ffmpeg -y -v error -i $S -vf scale=1280:-2 -c:v libx264 -crf 27 -preset slow -c:a aac -b:a 96k -movflags +faststart $O/film.mp4
ffmpeg -y -v error -ss 114.4 -i $S -frames:v 1 -vf scale=1280:-2 -q:v 3 $O/film-poster.jpg
cwebp -quiet -q 82 -resize 700 0 $R/Baynes-Steak-Pie-Large-768x512.png -o $O/products/steak-pie.webp
