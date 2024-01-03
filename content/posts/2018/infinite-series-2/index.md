---
title: "အနန္တကိန်းစဉ်တန်းများ (Part 2)"
date: "2018-03-18"
slug: "infinite-series-2"
categories:
  - "maths"
tags:
  - "infinite series"
  - "series"
coverImage: "Bessel_Functions_1st_Kind_n012.png"
---

## Function များအား series ဖြင့်ဖော်ပြခြင်း (Series representation of functions)

$e^x $ ရဲ့ series expansion ကို အရင်က [Taylor series](http://theinlinaung.com/taylor-series/) နဲ့တွက်ခဲ့ပါတယ်။ အဖြေကတော့−

$$
e^x=\sum_0^\infty \frac{x^n}{n!}
$$

Sine နဲ့ cosine function တွေအတွက်လဲ series expansion ကိုရှာကြည့်ရအောင်။ $ \text x_o=0 $ မှာအကျယ်ဖြန့်ထားတဲ့ Taylor series expansion  အရ-

$$
\begin{aligned}
\sin x &=\sin 0+x\cos 0-\frac {x^2}{2!}\sin 0-\frac{x^3}{3!}\cos0+\frac{x^4}{4!}\sin 0+...
\\
&=x-\frac{x^3}{3!}+\frac{x^5}{5!}+...
\\
&=\sum_0^\infty \frac{(-1)^nx^{(2n+1)}}{(2n+1)!}
\end{aligned}
$$

အလားတူပဲ $ \cos x $ အတွက်လည်း−

$$
\begin{aligned}
\cos x &=1-\frac{x^2}{2!}+\frac{x^4}{4!}+...
\\
&=\sum_0^\infty \frac{(-1)^nx^{2n}}{(2n)!}
\end{aligned}
$$

## Function နှစ်ခု၏ကိုယ်စားပြု series နှစ်ခုအား နှိုင်းယှဉ်ခြင်း (Series representation of two functions)

Function $ f(x) $ ကို အကျယ်ဖြန့်ထားတဲ့ series တစ်ခုရှိတယ်ဆိုပါတော့။ အဲ့ဒီ့ series ရဲ့ interval of convergence တစ်ခုရှိမယ်။ တကယ်လို့ နောက် function တစ်ခု $ g(x) $ က $ f(x) $ နဲ့တူရင် သူတို့နှစ်ခုရဲ့ series တွေကလည်းတူညီပါတယ်။ ဥပမာ $ f(x)=\sin 2x, g(x) = 2 \sin x \cos x $ ဆိုရင် $ f(x) $ နဲ့ $ g(x) $ တို့ရဲ့ series တွေက တူညီပါလိမ့်မယ်။ ယေဘူယျပြောရရင်တော့−

$f(x)= \sum_0^\infty a_n x^n $ ရယ်

$g(x) = \sum_0^\infty b_n x^n $ ဖြစ်ပြီး

$f(x) = g(x) $ ဖြစ်တယ်ဆိုရင်

$a_n = b_n $ ဖြစ်ပါတယ်။

ယေဘူယျအနေနဲ့တော့ ပေါင်းလဒ်တူတာနဲ့ အထဲကပေါင်းကိန်းတွေ အသီးသီးတူတယ်လို့ပြောလို့မရပါဘူး။ $ 6+2=5+3 $ လိုမျိုးပေါ့။ ဒါပေမယ့် $ f(x) $ နဲ့ $ g(x) $ ကိုကိုယ်စားပြုတဲ့ series နှစ်ခုရဲ့ interval of convergence ကလဲအတူတူဖြစ်တဲ့အပြင် interval of convergence အတွင်းမှာရှိတဲ့အမှတ်တိုင်းမှာ တူညီပါတယ်။ ဥပမာ $ -1<x<1 $ အတွက် $ x=0.5 $ မှာ $ \sum_0^\infty a_n x^n = \sum_0^\infty b_n x^n $ ဖြစ်ပြီး $ x=0.01 $ မှာလည်း $ \sum_0^\infty a_n x^n = \sum_0^\infty b_n x^n $ ဖြစ်ပါတယ်။ ဒီလိုတူညီတဲ့အမှတ်တွေက interval of convergence အတွင်းမှာ အနန္တရှိတဲ့အတွက် series နှစ်ခုရဲ့ term တွေကလည်း တူညီရပါမယ်။

နောက်တစ်နည်းစဉ်းစားရင် Taylor series အရ function နှစ်ခုကအမှတ်တိုင်းမှာတန်ဖိုးတူညီဖို့အတွက် rate of change တွေလဲတူရပါမယ်။ Rate of change တွေတူရင် series နှစ်ခုကလည်း တူပါတယ်။

$$
a_n=\frac{f^{(n)}(x_0)}{n!}, \ b_n=\frac{g^{(n)}(x_0)}{n!}
\\
f^{(n)}(x_0)=g^{(n)}(x_0)
\\
\therefore a_n=b_n
$$

## Function အား အနီးစပ်ဆုံးဖော်ပြခြင်း (Function approximation)

Function တစ်ခုကိုယ်စားပြု infinite series တစ်ခုကို finite term အရေအတွက် $ N $ မှာ ဖြတ်ချလိုက်ရင် Nth order expansion လို့ခေါ်ပါတယ်။ ဥပမာ $ x^5 $ မှာဖြတ်ချလိုက်ရင် 5th order အထိ expand လုပ်တယ်လို့ပြောမှာပေါ့။ $ \sin x $ ကို 3rd order အထိ expand လုပ်ရင် $ x-\frac{x^3}{6} $ ရပါတယ်။ Finite term တွေပေါင်းလဒ်က function တန်ဖိုးကို အနီးစပ်ဆုံးပဲရမှာဖြစ်တဲ့အတွက် order ဘယ်လောက်မှာဖြတ်ချရမလဲဆိုတာတော့ လိုချင်တဲ့တိကျမှုပေါ်မှာမူတည်ပါတယ်။

အပေါ်က $ x^2 $ order အထိအသုံးချမယ်ဆိုရင်−

$$
 \sin x = x
\\
 \cos x= 1-\frac{x^2}{2!}
\\
 \sin^2 x+\cos^2 x = x^2+1-x^2+\text{higher order terms}
$$

$ (1-x^2)^2 $ ကနေထွက်လာတဲ့ $ x^4 $ term က higher order term ထဲမှာပါသွားပြီမို့လို့ $ \sin^2 x+ \cos^2 x $ က $ 1 $ ရတာကို တွေ့နိုင်ပါတယ်။

ပိုပြီးရှုပ်ထွေးတဲ့ထပ်ကိန်းတွေနဲ့ဖွဲ့စည်းထားတဲ့ ကိန်းစဉ်တွေမှာဆိုရင် (ဥပမာ $ \frac{(x-3)^2}{2}+\frac{(x-3)^3}{3}+\frac{(x-4)^4}{4}+... $ ) တော့ x-order တွေက term တွေတိုင်းမှာ ရောနှောပါဝင်နေတဲ့အတွက် order နဲ့ဖြတ်ချဖို့ ခက်ခဲပါတယ်။

## Function ၏ derivative/integral အား series ဖြင့်ရှာခြင်း

Function ရဲ့ derivative က သူ့ရဲ့ series ကို term by term ရှိတ်တာနဲ့အတူတူပါပဲ။ ဥပမာ $ \ln(1+x) $ ကို ရှိတ်ချင်တယ်ဆိုပါတော့။ ဒါဆိုသူ့ရဲ့ series representation က−

$$

\ln(1+x)=x- \frac {x^2}{2}+\frac {x^3}{3}+...


$$

ဒီ series က $ |x|<1 $ အတွက် converge ဖြစ်ပါတယ်။ နှစ်ဖက်စလုံးကို တစ်ခါရှိတ်လိုက်ရင်−

$$

\frac{1}{1+x}=1-x+x^2-x^3+...


$$

ညာဘက်ခြမ်းက series က $ \frac {1}{1+x} $ အတွက် series ဖြစ်တဲ့အတွက် ရလဒ်ကမှန်ကန်ပါတယ်။ ဒီညီမျှခြင်းကို integrate လုပ်ပြီးတော့လည်း မူလ function ကိုပြန်ရနိုင်ပါတယ်။

## ရူပဗေဒမှဥပမာတစ်ခု

နောက်ဆုံးဥပမာတစ်ခုအနေနဲ့ စက်ဝိုင်းပုံသံပြားနှစ်ခုနဲ့လုပ်ထားတဲ့ လျှပ်သို (capacitor) ကငုတ်နှစ်ခုကို alternating current (AC) လျှပ်စစ်ပေးလိုက်ရင် သံပြားနှစ်ခုကြားမှာ လျှပ်စစ်စက်ကွင်းတစ်ခု ဖြစ်ပေါ်လာပါတယ်။ ဒီလျှပ်စစ်စက်ကွင်းက ဆလင်ဒါပုံ geometry အလိုက်ခေါက်ချိုးညီတဲ့အတွက် သံပြားရဲ့ဗဟိုကနေအကွာအဝေး (အချင်းဝက်) ပေါ်မူတည်ပြီးပြောင်းလဲပါတယ်။ ဒီလျှပ်စစ်စက်ကွင်း $ \vec{E} $ ကို ကိုယ်စားပြုတဲ့ညီမျှခြင်းက−

$$

\vec{E} = E_0 e^{i\omega t}\left[ 1-\frac{1}{(1!)^2}\left( \frac{\omega r}{2c}\right) ^2+\frac{1}{(2!)^2}\left( \frac{\omega r}{2c}\right) ^4+\frac{1}{(3!)^2}\left( \frac{\omega r}{2c}\right) ^6+... \right]


$$

$$

J_o(x)=\left[ 1-\frac{1}{(1!)^2}\left( \frac{\omega r}{2c}\right) ^2+\frac{1}{(2!)^2}\left( \frac{\omega r}{2c}\right) ^4+\frac{1}{(3!)^2}\left( \frac{\omega r}{2c}\right) ^6+... \right]


$$

$ r $ က ဗဟိုကနေအကွာအဝေးဖြစ်ပြီး $ \omega $ က AC လျှပ်စစ်ရဲ့ကြိမ်နှုန်းဖြစ်ပါတယ်။ $ J_o(x) $ ကို Bessel function (first kind) လို့ခေါ်ပြီ:  cylindrical wave တွေတွက်တဲ့အခါမှာ အသုံးပြုလေ့ရှိပါတယ်။

![Bessel Functions (1st Kind, n=0,1,2).svg  
by [Inductiveload](https://commons.wikimedia.org/wiki/User:Inductiveload "User:Inductiveload") - Own work, made with Inkscape, Public Domain](https://upload.wikimedia.org/wikipedia/commons/5/5d/Bessel_Functions_%281st_Kind%2C_n%3D0%2C1%2C2%29.svg)

Related post : [Infinite Series (Part 1)](http://theinlinaung.com/infinite-series/)

<Blockquote author="Bertrand Russell">
The true spirit of delight, the exaltation...which is the touchstone of the highest excellence, is to be found in mathematics as surely as in poetry.
</Blockquote>
