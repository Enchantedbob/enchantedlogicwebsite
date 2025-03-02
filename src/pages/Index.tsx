import { Link } from "react-router-dom";
import { Home, Factory, ScrollText, Smartphone } from "lucide-react";
import HitCounter from "@/components/layout/sidebar/HitCounter";
import SidebarNavigation from "@/components/layout/sidebar/appsidebar";
import RightSideMenu from "@/components/layout/sidebar/RightSideMenu";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Full Width */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary text-white py-16 fixed top-0 left-0 right-0 z-10">
        <div className="px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enchanted Logic
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transform your business with intelligent automation and custom solutions that will Make Money, Increase Efficiency and Save Time
            </p>
          </div>
        </div>
      </section>

      <div className="flex pt-48 mt-24 overflow-hidden">
        {/* Left Side Section - 1/8 width, fixed position */}
        <section className="fixed left-0 top-56 w-1/8 bg-blue-100 min-h-[400px]" style={{ maxWidth: '12.5%' }}>
          <SidebarNavigation className="max-w-full" style={{ width: '100%' }} />
          <HitCounter />
        </section>

        {/* Main Content - Absolutely Positioned */}
        <div
          className="overflow-y-auto bg-white absolute"
          style={{
            left: "12.5%",
            right: "0%",
            backgroundColor: "lightblue",
            top: "18rem",
            marginTop: "24px",
            padding: "1rem",
          }}
        >
          {/* Content will be added here */}
          <p>From the original Klingon - the Art of war(ish)</p>
          <p>
            <p>
              nuqDaq ngemHomDaq QoltaHvIS, jatlh: "naVDaq tlhejtaHvIS:
              "navDaq ngemHomDaq tlhevtaHvIS: tuq ngemHomDaq tlhevtaHvIS.
              tayqeqmaj'e'. vaj QongDI', pagh, QongDaqDI', va, bIchu'
              DanobtaHvIS. Qo'noS bIghosnISmoH. D: bIsop, be'nI'puqloDwI'
              yISuch. tayqeqmaj'e'. vaj QongDI', pagh, QongDaqDI', va, bIchu'
              DanobtaHvIS. Qo'noS bIghosnISmoH. D: bIsop, be'nI'puqloDwI'
              yISuch.
            </p>
          </p>
          <p>
            ngemHomDaq ngaSwI''e' (tugh jIbejDI'! Hu'tegh, qaStaHvIS wa'maH
            vIpoQ, qaStaHvIS wa'maH vIpoSmoH. tlhIngan qaStaHvIS poH law',
            jIHeghtaHvIS, tlhIngan vIqelta'bogh. 'ej tlhIHdaq ghu'meyvam
            poHlIj? QongDaq bIQ 'e' yImev. qaStaHvIS veS
            nepwI' vISovchoH. 'ach tIgh yISaHtaHvIS, tImHa'lu'. nuqDaq
            vIja'nIS? pa'Daq jIra'pu'. jIHvaD De' chotwI muHoH 'e' vIHar.
            jIbuSQo' 'e' vInID, 'ach vIpong 'e' vInID. ... ghop vItlhap. "nuqDaq ngemHomDaq
            QoltaHvIS, jatlh: "naVDaq tlhejtaHvIS: "navDaq ngemHomDaq
            tlhevtaHvIS: tuq ngemHomDaq tlhevtaHvIS. tayqeqmaj'e'. vaj
            QongDI', pagh, QongDaqDI', va, bIchu' DanobtaHvIS. Qo'noS
            bIghosnISmoH. D: bIsop, be'nI'puqloDwI' yISuch. tayqeqmaj'e'.
            vaj QongDI', pagh, QongDaqDI', va, bIchu' DanobtaHvIS. Qo'noS
            bIghosnISmoH. D: bIsop, be'nI'puqloDwI' yISuch.
          </p>
          <p>
            ngemHomDaq ngaSwI''e' (tugh jIbejDI'! Hu'tegh, qaStaHvIS wa'maH
            vIpoQ, qaStaHvIS wa'maH vIpoSmoH. tlhIngan qaStaHvIS poH law',
            jIHeghtaHvIS, tlhIngan vIqelta'bogh. 'ej tlhIHdaq ghu'meyvam
            poHlIj? QongDaq bIQ 'e' yImev. qaStaHvIS veS
            nepwI' vISovchoH. 'ach tIgh yISaHtaHvIS, tImHa'lu'. nuqDaq
            vIja'nIS? pa'Daq jIra'pu'. jIHvaD De' chotwI muHoH 'e' vIHar.
            jIbuSQo' 'e' vInID, 'ach vIpong 'e' vInID. ... ghop vItlhap. vaj vIHbe'nIS. 'ach
            HeghnIS vay' HeghwI' jIvumnIS. qaSpu'chugh, vaj ghobe'. jIqaDta',
            tlhInganpu' vIlaDta': tlhInganpu'. D: teHMej. qa' Dunvo' daqDaq
            ghotvam, quvHa'meH quvHa'moH
          </p>
          <p>
            "vISovbe'" jang toraQ "vISovbe'." ghaH ghot law' yay', 'ach wa'
            ghot puS. jIHvaD De' jIQoy. Dunqu' pagh qeylIS neH jay'.
            qorDu'ghotpu', qorDu'lIj yejquv DaHaDrupchugh, qorDu'lIjDaq
            yaHlaH jay'. tlhIngan wo' voDleH wa'DIch ghaH. Qu'vatlh, tojlIj
            HIvje' tInob. Heghpu'bogh mInDu'wIj, jevtaHghachdaj"nuqDaq
            ngemHomDaq QoltaHvIS, jatlh: "naVDaq tlhejtaHvIS: "navDaq
            ngemHomDaq tlhevtaHvIS: tuq ngemHomDaq tlhevtaHvIS.
            tayqeqmaj'e'. vaj QongDI', pagh, QongDaqDI', va, bIchu'
            DanobtaHvIS. Qo'noS bIghosnISmoH. D: bIsop, be'nI'puqloDwI'
            yISuch.
          </p>
          <p>
            tayqeqmaj'e'. vaj QongDI', pagh, QongDaqDI', va, bIchu'
            DanobtaHvIS. Qo'noS bIghosnISmoH. D: bIsop, be'nI'puqloDwI'
            yISuch. ngemHomDaq ngaSwI''e' (tugh jIbejDI'! Hu'tegh, qaStaHvIS
            wa'maH vIpoQ, qaStaHvIS wa'maH vIpoSmoH. tlhIngan qaStaHvIS
            poH law', jIHeghtaHvIS, tlhIngan vIqelta'bogh. 'ej tlhIHdaq
            ghu'meyvam poHlIj? QongDaq bIQ 'e' yImev. qaStaHvIS veS
            nepwI' vISovchoH. 'ach tIgh yISaHtaHvIS, tImHa'lu'. nuqDaq
            vIja'nIS? pa'Daq jIra'pu'. jIHvaD De' chotwI muHoH 'e' vIHar.
            jIbuSQo' 'e' vInID, 'ach vIpong 'e' vInID. ... ghop vItlhap.
          </p>
          <p>
            Dunqu' pagh qeylIS neH jay'. qorDu'ghotpu', qorDu'lIj yejquv
            DaHaDrupchugh, qorDu'lIjDaq yaHlaH jay'. tlhIngan wo' voDleH
            wa'DIch ghaH. Qu'vatlh, tojlIj HIvje' tInob. Heghpu'bogh
            mInDu'wIj, jevtaHghachdaj lu'angbogh QoQ 'ej naghmey. ghIq yabDaj
            Dotlh vIleghbogh naghmey beQ 'ej HajmoHbogh qechmey puS.
            choDnaltaHvIS, choSnaDba' 'ach jIblu' 'e' 'ang 'oH. naDev
            ramjep, naDev jochqangchugh, ghot puSqu'chugh. bIleSchugh, vaj

          </p>
          <p>
            bIvongchugh, vaj Bivalchugh. 'ach mIschoHmoHlu' e'
            vIqapbe'chugh. Hu'tegh, ngoDmey potlh law', HuqloD pov Huj. vaj
            nuvlI' ghot tu'lu'
          </p>
          <p>
            vaj vIHbe'nIS. 'ach HeghnIS vay' HeghwI' jIvumnIS. qaSpu'chugh,
            vaj ghobe'. jIqaDta', tlhInganpu' vIlaDta': tlhInganpu'. D:
            teHMej. qa' Dunvo' daqDaq ghotvam, quvHa'meH quvHa'moH "vISovbe'"
            jang toraQ "vISovbe'." ghaH ghot law' yay', 'ach wa' ghot puS.
            jIHvaD De' jIQoy. Dunqu' pagh qeylIS neH jay'. qorDu'ghotpu',
            qorDu'lIj yejquv DaHaDrupchugh, qorDu'lIjDaq yaHlaH jay'. tlhIngan
            wo' voDleH wa'DIch ghaH. Qu'vatlh, tojlIj HIvje' tInob.
            Heghpu'bogh mInDu'wIj, jevtaHghachdaj lu'angbogh QoQ 'ej naghmey.
            ghIq yabDaj Dotlh vIleghbogh naghmey beQ 'ej HajmoHbogh qechmey
            puS. choDnaltaHvIS, choSnaDba' 'ach jIblu' 'e' 'ang 'oH. naDev
            ramjep, naDev jochqangchugh, ghot puSqu'chugh. bIleSchugh, vaj
            bIvongchugh, vaj Bivalchugh. 'ach mIschoHmoHlu' e'
            vIqapbe'chugh. Hu'tegh, ngoDmey potlh law', HuqloD pov Huj. vaj
            nuvlI' ghot tu'lu'
          </p>
        </div>

        {/* Right Side Section - 1/8 width, fixed position */}
        <section className="fixed right-0 top-[308px] w-1/8 bg-blue-100 min-h-[400px]">
          <RightSideMenu />
        </section>
      </div>

      {/* Chat Link - Fixed at the bottom right */}
      {/*
      <div className="fixed bottom-0 right-0 p-2">
        <Link to="/chat" className="flex items-center p-2 hover:bg-blue-200 rounded-md">
          <span>Chat</span>
        </Link>
      </div>
      */}
    </div>
  );
};

export default Index;

/*
  Notes:
  - We've tried setting the width of the content area using flex-grow, but it didn't work.
  - We've tried setting the width using calc(), but it didn't work either.
  - We've tried using !important to force the width calculation, but it didn't work.
  - We are now trying absolute positioning to control the width and position directly.*/