---
title: "Linear Vector Spaces - Part 3"
date: "2020-11-04"
slug: "linear-vector-spaces-3"
categories:
  - "maths"
tags:
  - "basis"
  - "outer product"
  - "tensor"
  - "vector"
---

## Tensor product/outer product

Tensor product ဆိုတာ vector တွေရဲ့ product တစ်မျိုးပဲဖြစ်ပါတယ်။ Vector နှစ်ခု dot product/scalar product ယူလိုက်ရင် scalar ကိန်းတစ်ခုကိုပေးသလိုမျိုး vector နှစ်ခု tensor product ယူလိုက်ရင် tensor တစ်ခုကိုရပါတယ်။ Tensor ဆိုတာကလည်း vector ဥပဒေဿတွေကိုလိုက်နာတဲ့ vector တစ်မျိုးပဲဖြစ်ပါတယ်။ Tensor တွေ (အထူးသဖြင့် second rank လို့ခေါ်တဲ့အမျိုးအစားတွေ) ကို matrix ပုံစံနဲ့ရေးလေ့ရှိပေမယ့် ဒီနေရာမှာအရင်ဆုံး အရှေ့ကပုံစံတွေအတိုင်း vector form နဲ့ရေးပါမယ်။

Vector နှစ်ခု tensor product ကလည်း မြှောက်တဲ့ပုံစံတစ်မျိုးပါပဲ။ ဒါပေမယ့် မြှောက်တဲ့နည်းက နည်းနည်းထူးဆန်းပါတယ်။ အောက်ကပုံမှာ $ \mathbf{r} \in \mathbb{R}^3 $ vector တစ်ခုနဲ့ $ \mathbf{s} \in \mathbb{R}^2 $ vector တစ်ခု tensor product လုပ်တာကိုပြထားပါတယ် \[[Ref 1](https://www.math3ma.com/blog/the-tensor-product-demystified)\]။ ပုံထဲကအတိုင်း tensor product $ (\mathbf{r} \otimes \mathbf{s}) $ (r o-times s) ကပထမ vector ရဲ့ component တစ်ခုချင်းစီကို ဒုတိယ vector နဲ့ဘေးတိုက်မြှောက်ထားတာပါပဲ။

$$
\mathbf{r}=\begin{pmatrix}
r_1 \\ r_2 \\ r_3
\end{pmatrix},
\mathbf{s}=\begin{pmatrix}
s_1 \\ s_2
\end{pmatrix}
$$

![Tensor product ယူခြင်း](images/tensor_product_process.svg)

နောက်ဆုံးရလာတဲ့ product မှာ component ၆ ခုရှိတဲ့အတွက် $ \mathbf{r} $ နဲ့ $ \mathbf{s} $ ရဲ့ component တွေကို အမျိုးမျိုးတွဲပြီးမြှောက်ထားတာလို့လည်း မြင်လို့ရပါတယ်။ ယေဘူယျပြောရင် $ \mathbb{R}^m $ vector နဲ့ $ \mathbb{R}^n $ vector ကို tensor product လုပ်ရင် $ (m\times n) $ dimension ရှိတဲ့ vector (tensor) ကိုရပါတယ်။ ဒီ tensor က vector ပုံစံတစ်မျိုးဖြစ်ပေမယ့် dimension/basis က သူ့ကိုဖြစ်စေတဲ့ မူလ vector နှစ်ခုရဲ့ dimension တွေနဲ့မတူတော့တာကြောင့် သူတို့ကို tensor product space ထဲမှာရှိတယ်ဆိုပြီးတော့ သပ်သပ် သတ်မှတ်ထားတာဖြစ်ပါတယ်။ စာလိုပြောရင် vector space $ \mathcal{V} $ နဲ့ vector space $ \mathcal{W} $ တို့ရဲ့ tensor product space က $ \mathcal{V} \otimes \mathcal{W} $ လို့ဆိုပါတယ်။

Vector တစ်ခုကို linear combination of basis အနေနဲ့ရေးလို့ရတယ်လို့ [ရှေ့မှာ](http://theinlinaung.com/linear-vector-spaces-1/#vector_bases) ပြောခဲ့ပါတယ်။ ဒီတော့ tensor product ရဲ့ basis ကရောဘာဖြစ်မလဲ။ Component ၆ ခုရှိတဲ့ tensor အတွက် basis ကလည်း ၆ ခုရှိရမှာပါ။ ဒီ basis က tensor product ယူထားတဲ့ vector နှစ်ခုရဲ့ basis တွေပေါ်မှာ မူတည်လိမ့်မယ်ဆိုတာတော့ သိသာပါတယ်။ လက်ရှိဥပမာအတိုင်း $ \mathbb{R}^3 $ vector ရဲ့ basis ကို $ \{\mathbf{i}, \mathbf{j}, \mathbf{k}\} $, $ \mathbb{R}^2 $ vector ရဲ့ basis ကို $ \{\mathbf{i}', \mathbf{j}'\} $ လို့ခေါ်လိုက်မယ်ဆိုရင် tensor ရဲ့ basis က ဒီ unit vector တွေကို အမျိုးမျိုးတွဲပြီး မြှောက်ဖို့ပါပဲ။ ပထမ basis မှာ unit vector သုံးခု၊ ဒုတိယ basis မှာ နှစ်ခုရှိတဲ့အတွက် သူတို့ကိုတွဲလိုက်ရင် မြှောက်လဒ်ခြောက်ခုရပါမယ်။

$$
\{\mathbf{i}, \mathbf{j}, \mathbf{k}\} \otimes  \{\mathbf{i}',\mathbf{j}'\} = \{
\mathbf{i} \otimes \mathbf{i}',
\mathbf{i} \otimes \mathbf{j}',
\mathbf{j} \otimes \mathbf{i}',
\mathbf{j} \otimes \mathbf{j}',
\mathbf{k} \otimes \mathbf{i}',
\mathbf{k} \otimes \mathbf{j}'
\}
$$

ဥပမာအနေနဲ့−

$$
\mathbf{i}=
\begin{pmatrix}
1 \\ 0 \\ 0
\end{pmatrix},
\mathbf{j}=
\begin{pmatrix}
0 \\ 1 \\ 0
\end{pmatrix},
\mathbf{k}=
\begin{pmatrix}
0 \\ 0 \\ 1
\end{pmatrix} \\
\mathbf{i}'=
\begin{pmatrix}
1 \\ 0
\end{pmatrix},
\mathbf{j}'=
\begin{pmatrix}
0 \\ 1
\end{pmatrix}
$$

ဖြစ်မယ်ဆိုရင် tensor product basis တွေက−

$$
\mathbf{i} \otimes \mathbf{i}'=
\begin{pmatrix}
1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0
\end{pmatrix},
\mathbf{i} \otimes \mathbf{j}'=
\begin{pmatrix}
0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0
\end{pmatrix}, \dots,
\mathbf{k} \otimes \mathbf{j}'=
\begin{pmatrix}
0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1
\end{pmatrix}
$$

ဖြစ်တာကို တွက်ကြည့်နိုင်ပါတယ်။ ဒီ basis ကိုသုံးထားတဲ့ tensor တစ်ခုကို အောက်မှာရေးပြထားပါတယ်။

$$
2 \mathbf{i} \otimes \mathbf{i}'+ 3 \mathbf{i} \otimes \mathbf{j}'+ 4 \mathbf{k} \otimes \mathbf{i}'+5\mathbf{k} \otimes \mathbf{j}'=
\begin{pmatrix}
2 \\ 3 \\ 0 \\ 0 \\ 4 \\ 5
\end{pmatrix}
$$

ချုပ်လိုက်ရင် 3-D vector တစ်ခုကို basis တွေနဲ့ရေးတဲ့ပုံစံက−

$$ \mathbf{r}=r_1 \mathbf{i}+r_2 \mathbf{j}+r_3 \mathbf{k} $$

6-D tensor တစ်ခုကို basis တွေနဲ့ ရေးတဲ့ပုံစံက−

$$
\mathbf{A}=
A_1 \mathbf{i} \otimes \mathbf{i}'+
A_2 \mathbf{i} \otimes \mathbf{j}' +
A_3 \mathbf{j} \otimes \mathbf{i}' +
A_4 \mathbf{j} \otimes \mathbf{j}' +
A_5 \mathbf{k} \otimes \mathbf{i}' +
A_6 \mathbf{k} \otimes \mathbf{j}'
$$

အပေါ်မှာပြထားတဲ့ ပုံစံက tensor ကို vector ပုံစံနဲ့ရေးထားတာဖြစ်ပါတယ်။ ဒီဟာကို နောက်တစ်မျိုးအနေနဲ့ matrix ပုံစံနဲ့လည်းရေးလို့ရပါသေးတယ်။ ဒီလိုရေးဖို့ဆိုရင် tensor product ကို matrix operation အနေနဲ့ outer product ဆိုတာကိုသုံးပြီးတော့ တွက်ရပါမယ်။ Inner product တုန်းက $ \mathbf{r} \cdot \mathbf{s} = \mathbf{r}^T \mathbf{s} $ လို့ရေးခဲ့သလိုပဲ outer product က−

$$
\begin{aligned}
\mathbf{r} \otimes \mathbf{s} &= \mathbf{r} \mathbf{s}^T
\end{aligned}
$$

ဒီတော့ $ \mathbf{r}\in\mathbb{R}^3, \mathbf{s}\in\mathbb{R}^2 $ ဖြစ်မယ်ဆိုရင် $ \mathbf{A}\in\mathbf{r} \otimes \mathbf{s} $ ရဲ့ dimension က matrix multiplication အရ $ 3\times 2 $ ဖြစ်ပါမယ်။

$$
\begin{aligned}
\mathbf{A}=\mathbf{r} \otimes \mathbf{s} &=\mathbf{r} \mathbf{s}^T
\\&=
\begin{pmatrix}
r_1 \\ r_2 \\ r_3
\end{pmatrix}
\begin{bmatrix}
s_1 & s_2
\end{bmatrix} \\
&=
\begin{bmatrix}
r_1s_1 & r_1s_2\\
r_2s_1 & r_2s_2 \\
r_3s_1 & r_3s_2
\end{bmatrix}
\end{aligned}
$$

ယေဘူယျအားဖြင့် m-dimensional vector နဲ့ n-dimensional vector နှစ်ခု tensor product ရဲ့ matrix dimension က $ m \times n $ ဖြစ်ပါတယ်။ ဒါဆိုရင် tensor ရဲ့ matrix ပုံစံရဲ့ basis တွေကရော။

Tensor $ \mathbf{A} $ ရဲ့ matrix form နဲ့ (အပေါ်ဆုံးက) vector form ရဲ့ component တွေကို နှိုင်းယှဉ်ကြည့်မယ်ဆိုရင် vector form က matrix form ကို တန်းစီရေးထားတာပဲဖြစ်ပါတယ်။ Matrix ပုံစံကိုရေးတဲ့အခါကျတော့ basis တွေကို indicial notation နဲ့ရေးလေ့ရှိပါတယ်။ Indicial notation ဆိုတာ basis vector တွေကို $ \{ \mathbf{i}, \mathbf{j}, \mathbf{k} \} $ ဆိုပြီး သင်္ကေတတွေနဲ့မရေးတော့ပဲ $ \{ \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3 \} $ ဆိုပြီး index တွေကိုသုံးပြီးရေးတာဖြစ်ပါတယ်။ ဒီတော့ vector basis နှစ်ခုကို $\mathbf{e}=\{ \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3 \} $ နဲ့ $ \mathbf{e}'=\{ \mathbf{e}'_1, \mathbf{e}'_2 \} $ လို့ခေါ်မယ်ဆိုရင် သူတို့နှစ်ခုရဲ့ tensor product basis ကို $ \mathbf{e}_i \otimes \mathbf{e}'_j , (i=1,2,3, j=1,2) $ ဆိုပြီး အတိုဆုံးရေးလို့ရပါတယ်။ ဒီ tensor product space ထဲမှာရှိတဲ့ tensor $ \mathbf{A} $ ကိုတော့−

$$\mathbf{A}=A_{ij} \mathbf{e}_i \otimes \mathbf{e}_j'$$

လို့ရေးပါတယ်။ ဒီလိုရေးလိုက်ရင် $ \mathbf{A} $ က matrix ပုံစံ tensor တစ်ခုဖြစ်ပြီး $ A*{ij} $ က tensor ရဲ့ $ (ij)^\text{th} $ component, $ \mathbf{e}_i \otimes \mathbf{e}'_j $ က tensor ရဲ့ basis ဖြစ်တာကိုသိနိုင်ပါတယ်။ $ \mathbf{A} $ matrix မှာ $ i $ က row number ဖြစ်ပြီး $ j $ က column number ဖြစ်ပါတယ်။ ဥပမာ $ i=2,j=1 $ ဆိုရင် basis $ \mathbf{e}_2 \otimes \mathbf{e}'_1 $ ရဲ့ component က $ A*{21} $ ဖြစ်ပြီး ဒီကိန်းက matrix ထဲမှာ row 2, column 1 မှာရှိမှာဖြစ်ပါတယ်။

![Tensor ၏ matrix ပုံစံ](images/tensor_vector_matrix_forms.svg)

Vector နှစ်ခု tensor product လုပ်လိုက်ရင် ရလာတဲ့ tensor က index နှစ်ခု $ (i,j) $ ရှိတဲ့အတွက် second rank tensor လို့ခေါ်ပါတယ်။ ယေဘူယျပြုလိုက်ရင် scalar က zero rank, vector က first rank tensor ဆိုပြီးတော့လည်းပြောလို့ရပါတယ်။ Second rank ထက်များတဲ့ tensor တွေလည်းရှိနိုင်ပါသေးတယ်။ လက်တွေ့မှာ 3-dimensional vector တွေကို tensor product လုပ်တာများတဲ့အတွက် 3x3 matrix ပုံစံနဲ့ symmetric second rank tensor တွေက အသုံးများပါတယ်။

## References

1. [https://www.math3ma.com/blog/the-tensor-product-demystified](https://www.math3ma.com/blog/the-tensor-product-demystified)
2. Basic Training in Mathematics (R. Shankar)
3. Continuum Mechanics (P. Chadwick)
4. [Elementary Linear Algebra (K. R. Matthews)](http://www.numbertheory.org/book/mp103.pdf)
5. [https://en.wikipedia.org/wiki/Tensor_product](https://en.wikipedia.org/wiki/Hilbert_space)

<Blockquote author="Nightwish">
Fear of the unknown clouds our heart today
</Blockquote>
