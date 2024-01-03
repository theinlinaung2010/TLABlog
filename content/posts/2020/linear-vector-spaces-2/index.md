---
title: "Linear Vector Spaces - Part 2"
date: "2020-10-18"
slug: "linear-vector-spaces-2"
categories:
  - "maths"
tags:
  - "dot product"
  - "hilbert space"
  - "inner product"
  - "vector"
---

## Vector များပေါင်းခြင်းနှင့် scalar ဖြင့်မြှောက်ခြင်း

Vector တွေကိုပေါင်းဖို့ အရိုးရှင်းဆုံးနည်းလမ်းက သူတို့ရဲ့ component အသီးသီးပေါင်းတာပါပဲ။ သင်္ချာပုံစံနဲ့ရေးရင်−

$$
\mathbf{r}=\begin{bmatrix}
r_1&r_2
\end{bmatrix}\begin{pmatrix}
\mathbf{i}\\ \mathbf{j} \end{pmatrix}\\

\mathbf{s}=\begin{bmatrix}
s_1&s_2
\end{bmatrix} \begin{pmatrix}
\mathbf{i}\\ \mathbf{j} \end{pmatrix} \\

\mathbf{r}+\mathbf{s}=\begin{bmatrix}
r_1+s_1&r_2+s_2
\end{bmatrix}\begin{pmatrix}
\mathbf{i}\\ \mathbf{j} \end{pmatrix}
$$

ဒါက physical vector တွေအတွက် geometrical နည်းဖြစ်တဲ့ မြားဖင်နဲ့ မြားခေါင်းဆက်ပြီး ပေါင်းတဲ့ရလဒ် နဲ့အတူတူပါပဲ။ ဒါပေမယ့်ဒီနည်းက 3D ထက်ပိုတဲ့ vector တွေအတွက်ပါ အဆင်ပြေပါတယ်။

Scalar နဲ့မြှောက်တာကလည်း ရှင်းပါတယ်။ Vector ရဲ့ component တွေအကုန်လုံးကို လိုက်မြှောက်လိုက်ရုံပါပဲ။ Geometry အမြင်အရ ဆိုရင်တော့ vector ကို ဆွဲဆန့်လိုက်တာဖြစ်ပါတယ်။

$$
2\mathbf{r}=\begin{bmatrix}
2r_1&2r_2
\end{bmatrix}\begin{pmatrix}
\mathbf{i}\\ \mathbf{j} \end{pmatrix}
$$

![Vector တစ်ခုကို scalar ဖြင့်မြှောက်ခြင်း](images/vector_2r.svg)

## Complex vectors

Vector ရဲ့ component တွေက real number တွေမဟုတ်ပဲ complex number တွေဖြစ်နေရင်လည်း ဒီသဘောတရားအတိုင်းပါပဲ။ Complex number တွေကလည်း scalar ကိန်းတွေပဲဖြစ်တဲ့အတွက် ပုံမှန် scalar မြှောက်ခြင်းဥပဒေဿတွေကို လိုက်နာပါတယ်။ ဥပမာ basis vector $ \mathbf{i}, \mathbf{j} $ ကို complex space မှာ define လုပ်လိုက်ရင်−

$$
\mathbf{i}=\begin{pmatrix}
1+0i \\ 0
\end{pmatrix}, \\ \mathbf{j}=\begin{pmatrix}
0\\1+0i
\end{pmatrix}\\\\
\begin{aligned}
\mathbf{r}=(1+2i)\mathbf{i}+(3+4i)\mathbf{j} \\
2\mathbf{r}=(2+4i)\mathbf{i}+(6+8i)\mathbf{j}
\end{aligned}
$$

ဒီဥပမာမှာ $ \mathbf{i}, \mathbf{j} $ က အရင်အတိုင်း x နဲ့ y real axis ပေါ်မှာရှိပြီးတော့ vector က complex component တွေဖြစ်သွားတာပဲရှိပါတယ်။ နောက်ထပ်ဥပမာတစ်ခုအနေနဲ့ complex unit vector နှစ်ခု $ \mathbf{e}_1, \mathbf{e}_2 $ ကို အောက်မှာပြထားပါတယ်။

$$
\mathbf{e}_1=\frac{1}{\sqrt 2}\begin{pmatrix}
1\\i
\end{pmatrix}, \\
\mathbf{e}_2=\frac{1}{\sqrt 2}\begin{pmatrix}
1\\-i
\end{pmatrix}
$$

ဒီ $ \{\mathbf{e}_1, \mathbf{e}_2\} $ က orthonormal basis တစ်ခုဖြစ်ကြောင်းကို သူတို့ရဲ့ dot product ကိုသုံးပြီး သက်သေပြလို့ရပါတယ်။

## Inner product/Dot product

Dot product ဆိုတာ vector နှစ်ခုပါဝင်တဲ့ မြှောက်လဒ်လိုမျိုး တွက်ချက်မှုတစ်ခုဖြစ်ပါတယ်။ Vector နှစ်ခု $ \mathbf{r}=r_1 \mathbf{i}+r_2 \mathbf{j} $ နဲ့ $ \mathbf{s} = s_1 \mathbf{i}+s_2 \mathbf{j} $ တို့ရဲ့ dot product ကိုရှာချင်ရင်−

$$
\begin{aligned}
\mathbf{r} \cdot \mathbf{s} &= (r_1 \mathbf{i}+r_2 \mathbf{j}) \cdot (s_1 \mathbf{i}+s_2 \mathbf{j}) \\
&=(r_1 \mathbf{i} \cdot s_1 \mathbf{i})+(r_2 \mathbf{j} \cdot s_1 \mathbf{i})+(r_1 \mathbf{i} \cdot s_2 \mathbf{j})+(r_2 \mathbf{j} \cdot s_2 \mathbf{j})\\
&=r_1s_1 \mathbf{i}\cdot \mathbf{i}+
r_2s_1 \mathbf{j}\cdot \mathbf{i}+
r_1s_2 \mathbf{i}\cdot \mathbf{j}+
r_2s_2 \mathbf{j}\cdot \mathbf{j} \\
&=r_1s_1+r_2s_2
\end{aligned}
$$

ဒုတိယလိုင်းနဲ့ တတိယလိုင်းမှာ dot product ကို linear ဖြစ်တယ်လို့ယူဆပြီး ဖြန့်ဝေရဂုဏ်သတ္တိကိုအသုံးချထားတာဖြစ်ပါတယ်။ တတိယလိုင်းမှာ $ \mathbf{i}\cdot \mathbf{i}=1 $ နဲ့ $ \mathbf{i} \cdot \mathbf{j}=0 $ ကိုသုံးထားတာဖြစ်ပါတယ်။ ယေဘူယျပြောရင်−

$$ 
\mathbf{r}\cdot\mathbf{s}=r_1 s_1+r_2s_2+\dots+r_n s_n=\sum_{i=1}^n r_i s_i 
$$

ဒီနေရာမှာတစ်ခုရှိတာက အပေါ်က dot product/inner product ရဲ့ ဖွင့်ဆိုချက်က real vector (component တွေက ကိန်းစစ်တွေပဲပါတဲ့ vector) တွေအတွက်သာဖြစ်ပြီး complex vector တွေအတွက်ဆိုရင် dot product အရှေ့က vector ကို complex conjugate လုပ်ရပါတယ်။ Complex conjugate ဆိုတာ complex number ရဲ့ complex component ကို လက္ခဏာပြောင်းထားတာပါ။ ဥပမာ $ a=1+2i $ ရဲ့ complex conjugate က $ a^*=1-2i $ ဖြစ်ပါတယ်။ Real number တွေအတွက် complex component က 0 ဖြစ်တဲ့အတွက် ဒီလိုလုပ်စရာမလိုပါဘူး။ ဒီတော့ ယေဘူယျအားဖြင့်ဆိုရင်−

$$ 
\mathbf{r}\cdot\mathbf{s}=r_1^* s_1 + r_2^* s_2 + \dots+r_n^*  s_n=\sum_{i=1}^n r_i^* s_i 
$$

Matrix ပုံစံနဲ့ဆိုရင်−

$$ 
\mathbf{r}\cdot \mathbf{s}=\begin{bmatrix} r_1^* & r_2^* & \dots & r_n^* \end{bmatrix}\begin{pmatrix} s_1 \\ s_2 \\ \vdots \\ s_n \end{pmatrix}=(\mathbf{r}^* )^T \mathbf{s} 
$$

ဘာလို့ complex vector တွေအတွက် dot product ကို complex conjugate သုံးရသလဲဆိုရင် vector ရဲ့ အလျား (norm) ကိုသတ်မှတ်တဲ့အခါ ကိန်းစစ်အပေါင်းကိန်း (positive real number) ရအောင်လို့လို့ အလွယ်မှတ်လို့ရပါတယ်။

Vector နှစ်ခုရဲ့ dot product က scalar တန်ဖိုးကိုပေးတဲ့အတွက် scalar product လို့လည်းခေါ်ပါတယ်။ Geometry နည်းအရတော့ $ \mathbf{r} \cdot \mathbf{s} $ က $ \mathbf{r} $ ရဲ့ အလျားနဲ့ $ \mathbf{r} $ နဲ့အပြိုင်ရှိတဲ့ $ \mathbf{s} $ ရဲ့ component (projected length) တို့မြှောက်လဒ်ဖြစ်ပါတယ်။ တစ်နည်းပြောရရင် $ \mathbf{r} $ ရဲ့အလျားကို $ |s| \cos \theta $ နဲ့ scale လုပ်ထားတာဖြစ်ပါတယ်။

![Dot product projection](images/dot_product_angle.svg)

$$ 
\mathbf{r}\cdot \mathbf{s} = \|\mathbf{r}\|\|\mathbf{s}\| \cos\theta=\sum_{i=1}^nr_is_i 
$$

Vector တစ်ခုကိုသူကိုယ်တိုင်နဲ့ dot product လုပ်လိုက်ရင် component တွေကိုနှစ်ထပ်တင်ပြီးပေါင်းလဒ်ကို ရပါတယ်။ ပိုက်သာဂိုးရပ်သီအိုရမ်အရ ဒီပေါင်းလဒ်ကို square root ယူလိုက်ရင် vector ရဲ့ geometric အလျားကိုရပါတယ်။ ဒီအလျားဖွင့်ဆိုချက်ကို vector ရဲ့ Euclidean norm (သို့) $ L_2 $ norm လို့လည်းခေါ်ပါတယ်။

$$
\mathbf{r} \cdot \mathbf{r} = \|\mathbf{r}\|^2=\sum_{i=1}^n r_i^2 \\
\|\mathbf{r}\|=\sqrt{\mathbf{r} \cdot \mathbf{r}}=\sqrt{r_1^2 +r_2^2+\dots+r_n^2}
$$

တကယ်လို့ $ \mathbf{r} $ က complex vector ဖြစ်မယ်ဆိုရင် $ \mathbf{r} \cdot \mathbf{r} = \| \mathbf{r} \|^2=\sum_{i=1}^n r_i^* r_i $ ဆိုပြီးတွက်ရပါမယ်။ ဒါမှသာ norm က positive real number ကိုရမှာဖြစ်ပါတယ်။

Dot product က vector နှစ်ခုရဲ့ တစ်ခုပေါ်တစ်ခု scaled projection ပမာဏကို ပြတဲ့အတွက် ထောင့်မှန်ကျတဲ့ vector နှစ်ခုကို dot product ယူလိုက်ရင် zero ရပါလိမ့်မယ် ($ \cos 90 = 0 $)။ ပြောင်းပြန်ဆိုရင် zero dot product ဆိုရင် vector နှစ်ခု ထောင့်မှန်ကျတယ် (orthogonal) လို့ ပြောလို့ရပါတယ်။ ဥပမာ $ \mathbf{i} $ နဲ့ $ \mathbf{j} $ ဆိုရင်−

$$
\mathbf{i}\cdot \mathbf{j}=\begin{pmatrix}
1 \\ 0
\end{pmatrix}^T\begin{pmatrix}
0 \\ 1
\end{pmatrix}=\begin{bmatrix}
1&0
\end{bmatrix}\begin{pmatrix}
0\\1
\end{pmatrix}=1\times 0+0\times 1=0
$$


$ \mathbf{i} $ ကို သူကိုယ်တိုင်နဲ့ dot product ယူရင်−

$$
\mathbf{i}\cdot \mathbf{i}=\begin{bmatrix}
1&0
\end{bmatrix}\begin{pmatrix}
1\\0
\end{pmatrix}=1\times 1+0\times 0=1
$$

အပေါ်က complex vector နှစ်ခု $ \mathbf{e}_1 $ နဲ့ $ \mathbf{e}_2 $ ရဲ့ dot product ကိုရှာရင်−

$$
\mathbf{e}_1 \cdot \mathbf{e}_2=\frac{1}{2}\begin{bmatrix}
1 & -i
\end{bmatrix}\begin{pmatrix}
1\\-i
\end{pmatrix}=\frac{1}{2}(1-1)=0
$$

$ \mathbf{e}_1 $ ကို သူကိုယ်တိုင်နဲ့ dot product ယူရင်−

$$
\mathbf{e}_1 \cdot \mathbf{e}_1 =  \frac{1}{2}\begin{bmatrix}
1 & -i
\end{bmatrix}\begin{pmatrix}
1\\i
\end{pmatrix}=\frac{1}{2}(1+1)=1
$$

Vector space တစ်ခုမှာ dimension ဘယ်နှစ်ခုရှိလဲ (dimensionality) ဆိုတာကို အချင်းချင်းထောင့်မှန်ကျတဲ့ orthonormal vector (သို့) basis vector ဘယ်နှစ်ခုရှိလဲဆိုတာနဲ့ သတ်မှတ်ပါတယ်။ ဥပမာ orthonormal basis vector နှစ်ခုရှိတယ်ဆိုရင် 2D space (planar) ဖြစ်ပါတယ်။ Euclidean space မှာ basis vector က သုံးခုအထိပဲရှိနိုင်ပေမယ့် abstract vector မှာတော့ [ရှေ့မှာပြောခဲ့သလို](http://theinlinaung.com/linear-vector-spaces-1/) ကြိုက်သလောက်ရှိလို့ရပါတယ်။ $ n $-dimensional real vector တစ်ခုကို n အရေအတွက်ရှိတဲ့ ကိန်းစစ်တွေနဲ့ဖော်ပြလို့ရတဲ့အတွက် $ \mathbb{R}^n $ space ထဲမှာရှိတယ်၊ $ (\mathbf{r} \in \mathbb{R}^n) $ လို့ပြောလေ့ရှိပါတယ်။ ဒီလိုပဲ $ n $ -dimensional complex vector space တစ်ခုကို $ \mathbb{C}^n $ လို့ခေါ်နိုင်ပါတယ်။ Euclidean space $ \mathbb{R}^3 $ ကို generalize လုပ်ထားတဲ့ $ \mathbb{C}^n $ vector space တွေကို [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space) လို့လည်းခေါ်ပါတယ်။

Vector တစ်ခုကို unit vector တစ်ခုနဲ့ dot product ယူလိုက်ရင် အဲ့ဒီ့ vector ရဲ့ unit vector လားရာမှာရှိတဲ့ component ကိုရပါတယ် (scale factor က 1 ဖြစ်လို့)။ ဒီတော့ vector နဲ့ basis vector တစ်ခုစီနဲ့ dot product လုပ်ပြီးတော့ အဲ့ဒီ့ basis မှာရှိတဲ့ component တွေကိုရှာလို့ရပါတယ်။

$$
\begin{aligned}
\mathbf{r}&=r_1 \mathbf{i} + r_2 \mathbf{j}\\
&=(\mathbf{r} \cdot \mathbf{i}) \mathbf{i} + (\mathbf{r} \cdot \mathbf{j}) \mathbf{j} \\
&=(\mathbf{r} \cdot \mathbf{i}') \mathbf{i}' + (\mathbf{r} \cdot \mathbf{j}') \mathbf{j}'
\end{aligned}
$$

ဥပမာတစ်ခုအနေနဲ့ အောက်ကပုံထဲကအတိုင်း $ \{\mathbf{i}, \mathbf{j}\} $ basis ကနေ $ \{\mathbf{i}', \mathbf{j}' \} $ ကိုပြောင်းတာကို ပြထားပါတယ်။

![Basis transformation example](images/vector_basis_transform.svg)

$$
\begin{aligned}
\mathbf{i}&=
\begin{pmatrix}
1 \\ 0
\end{pmatrix}, &
\mathbf{j}&=
\begin{pmatrix}
0 \\ 1
\end{pmatrix} \\

\mathbf{i}'&=
\begin{pmatrix}
\cos 45 \\ \sin 45
\end{pmatrix}, &
\mathbf{j}'&=
\begin{pmatrix}
-\cos 45 \\ \sin 45
\end{pmatrix} \\

 &=\frac{1}{\sqrt 2}
\begin{pmatrix}
1 \\ 1
\end{pmatrix}, &
 &=\frac{1}{\sqrt 2}\begin{pmatrix}
-1 \\ 1
\end{pmatrix}
\end{aligned}
\\

\begin{aligned}
\mathbf{r} &= 2 \mathbf{i}+3 \mathbf{j} \\
&=(\mathbf{r} \cdot \mathbf{i}') \mathbf{i}'+ (\mathbf{r} \cdot \mathbf{j}') \mathbf{j}' \\

&=\frac{1}{\sqrt 2}\begin{bmatrix}
2 & 3
\end{bmatrix}\begin{pmatrix}
1 \\ 1
\end{pmatrix} \mathbf{i}'+
\frac{1}{\sqrt 2}\begin{bmatrix}
2 & 3
\end{bmatrix}\begin{pmatrix}
-1 \\ 1
\end{pmatrix} \mathbf{j}' \\

&=\frac{5}{\sqrt 2} \mathbf{i}'+ \frac{1}{\sqrt 2} \mathbf{j}'

\end{aligned}
$$

Vector တစ်ခုနဲ့တစ်ခု ဆက်သွယ်ချက် (relation) တွေက ဘယ် basis ကနေတွက်တွက် အဖြေမှန်ပါတယ်။ ဒါပေမယ့် တစ်ချို့ basis တွေမှာ တွက်ရတာပိုလွယ်တဲ့အတွက် basis transformation တွေက အရေးပါတာဖြစ်ပါတယ်။

## References

1. Basic Training in Mathematics (R. Shankar)
2. [Elementary Linear Algebra (K. R. Matthews)](http://www.numbertheory.org/book/mp103.pdf)
3. [https://en.wikipedia.org/wiki/Hilbert_space](https://en.wikipedia.org/wiki/Hilbert_space)
