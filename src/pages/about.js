/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import { Container, Heading, Link, Divider, Flex, Box, Label } from "@theme-ui/components";

const AboutPage = () => {
  return (
    <Layout>
      <div sx={{ backgroundColor: "muted" }}>
        <Container as="main" sx={{ variant: "layout.main" }}>
          <Heading as="h1">Welcome to TLABlog</Heading>
          <p sx={{ fontStyle: "italic" }}>A minimalist blog with a focus on science, engineering and mathematics.</p>
          <p>
            {" "}
            သိပ္ပံနဲ့နည်းပညာပိုင်းမှာ သဘောကျတဲ့အကြောင်းအရာလေးတွေ မျှဝေပေးချင်လို့ blog လေးလုပ်ထားပါတယ်။
            စိတ်ဝင်စားတဲ့သူတွေ ထပ်ပြီးလေ့လာနိုင်အောင် အခြေခံကျတဲ့အယူအဆတွေနဲ့ သင်္ချာညီမျှခြင်းတချို့ပါထည့်ရေးပါတယ်။
            ဒီလိုပြောလို့ အဆင့်မြင့်တာတွေရေးနေတယ်လို့လည်းမထင်ပါနဲ့။ အနိမ့်ဆုံး အထက်တန်းအံဆင့်တက်နေတဲ့သူတွေ
            နားလည်နိုင်တဲ့ရှုထောင့်ကနေတော့ ရေးဖို့ကြိုးစားပါတယ်။ တကယ်လို့နားမလည်ရင် အကြောင်းအရာကခက်တာမဟုတ်ပဲ
            ကျွန်တော်စာရေးတာညံ့လို့ဖြစ်ကြောင်း ကြိုစကားခံပါရစေ။{" "}
          </p>
          <p>
            ပို့စ်အဟောင်းတွေက အရင် Wordpress ဆိုက်ကနေ port လုပ်ထားတာဖြစ်ပါတယ်။ တကယ်လို့တခုခုပျက်နေတာတွေ့ရင် comment
            ပေးထားခဲ့ပေးပါ။ ဒီဘလော့ပုံစံကိုသဘောကျလို့ ကိုယ်ပိုင်ဝက်ဆိုဒ်လုပ်ပြီး စာရေးချင်တယ်ဆိုရင် ဘယ်လိုလုပ်ရမလဲဆိုတာ
            tutorial ရေးလုပ်ဖို့စိတ်ကူးထားပါတယ်။ နည်းပညာနဲ့ရင်းနှီးသူဆိုရင် [Github
            repo](https://github.com/theinlinaung2010/TLABlog) မှာ contribute လုပ်ဖို့လည်း ဖိတ်ခေါ်ပါတယ်။{" "}
          </p>
          <p> တခုခုဆက်သွယ်ချင်တာရှိရင်တော့ tla@theinlinaung.com ကို email ပို့လို့ရပါတယ်။</p>
          <h2>License</h2>
          အခြားနေရာများမှ ကူးယူထားသော အစိတ်အပိုင်းများနှင့် ချွင်းချက်များမှလွဲ၍ ဤ website ၏ source code နှင့် blog
          ပါအကြောင်းအရာများ၊ ပုံများနှင့် လှုပ်ရှားအစိတ်အပိုင်းများ (interactive elements) ကို Creative Commons
          Attribution-NonCommercial 4.0 International (
          <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>) License ဖြင့် ထားရှိပါသည်။ ဤ blog
          ၏အစိတ်အပိုင်းများကို လွတ်လပ်စွာကူးယူ၊ မျှဝေ၊ ပြောင်းလဲဖန်တီးမှုများပြုလုပ်နိုင်ပါသည် (မူရင်းအား credit
          ပေးစေလိုပါသည်)။ သို့သော်စီးပွားရေးအတွက် သုံးစွဲခြင်းကိုမူ ခွင့်မပြုပါ။
          <h2>About me</h2>
          <p>
            ရန်ကုန်ကနေ မိုင် ၂၀ လောက်ဝေးတဲ့ မြို့လေးမှာကြီးပါတယ်။ သိပ္ပံ၊ နည်းပညာနဲ့ အင်ဂျင်နီယာပိုင်းဆိုင်ရာ ပညာတွေကို
            စိတ်ဝင်စားပါတယ်။ Piano တီးတာနဲ့ စက်ဘီးစီးတာဝါသနာပါပါတယ်။
          </p>
          <h3>Formal education</h3>
          <ul>
            <li>၂၀၁၀: ဆယ်တန်းအောင်</li>
            <li>၂၀၁၁−၂၀၁၅: ရေကြောင်းတက္ကသိုလ်, သန်လျင် (Naval Architecture and Ocean Engineering)</li>
            <li>၂၀၁၈−၂၀၂၀: Osaka University, Japan (M.E, NAOE)</li>
            <li>၂၀၂၀−၂၀၂၃: Neubrex Co., Ltd., Japan (Ph.D, NAOE)</li>
            <li>၂၀၂၃−current: Neubrex Co., Ltd., Japan (Information Processing Engineer)</li>
          </ul>
          <h3>Informal education</h3>
          Undergrad တုန်းက electronics နဲ့ programming နဲ့ physics ကိုစိတ်ဝင်စားတဲ့အတွက် ကိုယ့်ဟာကိုယ်လေ့လာဖြစ်ပါတယ်။
          Feynman lectures on Physics (Vol. 1) ဖတ်ရင်း သင်္ချာတချို့ကိုစိတ်ဝင်စားတဲ့အတွက်
          အခြေခံသင်္ချာစာအုပ်တစ်အုပ်လည်းဖတ်ဖြစ်ပါတယ်။ အမှတ်ရတဲ့စာအုပ်တချို့ကတော့−
          <li>Feynman Lectures on Physics (Vol. 1) (Vol. 2 ကတစ်ဝက်လောက်တော့ ဖတ်ပြီးပေမယ့် သေချာမမှတ်မိတော့ဘူး)</li>
          <li> Basic Training in Mathematics: A Fitness Program for Science Students (R. Shankar)</li>
          <li> Statistics (David Freedman)</li>
          <li> Selfish Gene (Richard Dawkins)</li>
          <li> The Demon-Haunted World (Carl Sagan)</li>
          <h3>Research</h3>
          <p>
            အိုဆာကာတက္ကသိုလ်မှာ ဘွဲ့လွန်တက်ရင်းလုပ်ခဲ့တဲ့ သုတေသနကတော့ နှစ်ပိုင်းရှိပါတယ်။ တပိုင်းက isogeometric analysis
            (IGA) လို့ခေါ်တဲ့ ကွန်ပျူတာသုံးပြီးတွက်ချက်တဲ့နည်းလမ်းနဲ့ solid mechanics ဆိုင်ရာပုစ္ဆာတွေကိုဖြေရှင်းတဲ့
            numerical code ရေးသားတာဖြစ်ပြီး နောက်တပိုင်းကတော့ inverse analysis လို့ခေါ်တဲ့
            လက်တွေ့တိုင်းတာချက်တွေကိုသုံးပြီး မသိကိန်းတွေကိုခန့်မှန်းတဲ့
            တွက်ချက်မှုနည်းလမ်းတွေကိုသုတေသနပြုလုပ်တာဖြစ်ပါတယ်။ ကျွန်တော့သုတေသန (အထူးသဖြင့် inverse analysis) အကြောင်းကို
            နောက်ပိုင်းမှာ post ရေးတင်ပေးဖို့စိတ်ကူးထားပါတယ်။ အလုပ်မှာတော့ optical fiber ကိုသုံးပြီး တိုင်းတာလို့ရတဲ့
            signal တွေကို analysis လုပ်ပြီး လိုချင်တဲ့ output ကိုတွက်ချက်တဲ့ စနစ်တွေကို သုတေသန/develop လုပ်ပါတယ်။ အဓိကက
            mathematical modelling နဲ့ coding ပိုင်းကိုသွားပါတယ်။ Formal publication တွေကိုတော့{" "}
            <a href="https://www.researchgate.net/profile/Thein-Aung-4/research">ဒီလင့်မှာ</a> သွားကြည့်လို့ရပါတယ်။
            တက္ကသိုလ်တက်နေစဉ်အတွင်းမှာ လေ့လာသင်ယူစရာတွေအများကြီးရခဲ့ပြီး စိတ်ဝင်စားပေမယ့် မလေ့လာဖြစ်ခဲ့တဲ့ပညာရပ်တွေလည်း
            တပုံကြီးကျန်နေပါသေးတယ်။
          </p>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About | TLA BLog</title>;
