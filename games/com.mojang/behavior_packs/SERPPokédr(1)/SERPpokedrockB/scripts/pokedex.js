import * as ui from "mojang-minecraft-ui";
import { world } from "mojang-minecraft";

let form = new ui.ActionFormData()
form.title("Pokémenu")
form.body("feed.whatup")
form.button("Pokémon","pokeitems/items/poke/pokeball")
form.button("Pokédex","pokeitems/items/poke/pokedex")
form.button("item.serp:poke_ride.name","pokeitems/items/poke/poke_ride")

let form0 = new ui.ActionFormData()
form0.title("Pokémon")
form0.body(" ")
form0.button("slot 1","pokeitems/items/poke/pokeball")
form0.button("slot 2","pokeitems/items/poke/pokeball")
form0.button("slot 3","pokeitems/items/poke/pokeball")
form0.button("slot 4","pokeitems/items/poke/pokeball")
form0.button("slot 5","pokeitems/items/poke/pokeball")
form0.button("slot 6","pokeitems/items/poke/pokeball")

let formdex = new ui.ActionFormData()
formdex.title("Pokédex")
formdex.body("realmsSlotsScreen.chooseSlot")
formdex.button("Gen 1")
formdex.button("Gen 2")

let form1 = new ui.ActionFormData()
form1.title("Pokédex")
form1.body("1st Gen")
form1.button("accessibility.button.back")
form1.button("entity.serp:bulbasaurw.name","textures/pokedex/001")
form1.button("entity.serp:ivysaurw.name","textures/pokedex/002")
form1.button("entity.serp:venusaurw.name","textures/pokedex/003")
form1.button("entity.serp:charmanderw.name","textures/pokedex/004")
form1.button("entity.serp:charmeleonw.name","textures/pokedex/005")
form1.button("entity.serp:charizardw.name","textures/pokedex/006")
form1.button("entity.serp:squirtlew.name","textures/pokedex/007")
form1.button("entity.serp:wartortlew.name","textures/pokedex/008")
form1.button("entity.serp:blastoisew.name","textures/pokedex/009")
form1.button("entity.serp:caterpiew.name","textures/pokedex/010")
form1.button("entity.serp:metapodw.name","textures/pokedex/011")
form1.button("entity.serp:butterfreew.name","textures/pokedex/012")
form1.button("entity.serp:weedlew.name","textures/pokedex/013")
form1.button("entity.serp:kakunaw.name","textures/pokedex/014")
form1.button("entity.serp:beedrillw.name","textures/pokedex/015")
form1.button("entity.serp:pidgeyw.name","textures/pokedex/016")
form1.button("entity.serp:pidgeottow.name","textures/pokedex/017")
form1.button("entity.serp:pidgeotw.name","textures/pokedex/018")
form1.button("entity.serp:rattataw.name","textures/pokedex/019")
form1.button("entity.serp:raticatew.name","textures/pokedex/020")
form1.button("entity.serp:spearoww.name","textures/pokedex/021")
form1.button("entity.serp:fearoww.name","textures/pokedex/022")
form1.button("entity.serp:ekansw.name","textures/pokedex/023")
form1.button("entity.serp:arbokw.name","textures/pokedex/024")
form1.button("entity.serp:pikachuw.name","textures/pokedex/025")
form1.button("entity.serp:raichuw.name","textures/pokedex/026")
form1.button("entity.serp:sandshreww.name","textures/pokedex/027")
form1.button("entity.serp:sandslashw.name","textures/pokedex/028")
form1.button("entity.serp:nidoranhw.name","textures/pokedex/029")
form1.button("entity.serp:nidorinaw.name","textures/pokedex/030")
form1.button("entity.serp:nidoqueenw.name","textures/pokedex/031")
form1.button("entity.serp:nidoranmw.name","textures/pokedex/032")
form1.button("entity.serp:nidorinow.name","textures/pokedex/033")
form1.button("entity.serp:nidokingw.name","textures/pokedex/034")
form1.button("entity.serp:clefairyw.name","textures/pokedex/035")
form1.button("entity.serp:clefablew.name","textures/pokedex/036")
form1.button("entity.serp:vulpixw.name","textures/pokedex/037")
form1.button("entity.serp:ninetalesw.name","textures/pokedex/038")
form1.button("entity.serp:jigglypuffw.name","textures/pokedex/039")
form1.button("entity.serp:wigglytuffw.name","textures/pokedex/040")
form1.button("entity.serp:zubatw.name","textures/pokedex/041")
form1.button("entity.serp:golbatw.name","textures/pokedex/042")
form1.button("entity.serp:oddishw.name","textures/pokedex/043")
form1.button("entity.serp:gloomw.name","textures/pokedex/044")
form1.button("entity.serp:vileplumew.name","textures/pokedex/045")
form1.button("entity.serp:parasw.name","textures/pokedex/046")
form1.button("entity.serp:parasectw.name","textures/pokedex/047")
form1.button("entity.serp:venonatw.name","textures/pokedex/048")
form1.button("entity.serp:venomothw.name","textures/pokedex/049")
form1.button("entity.serp:diglettw.name","textures/pokedex/050")
form1.button("entity.serp:dugtriow.name","textures/pokedex/051")
form1.button("entity.serp:meowthw.name","textures/pokedex/052")
form1.button("entity.serp:persianw.name","textures/pokedex/053")
form1.button("entity.serp:psyduckw.name","textures/pokedex/054")
form1.button("entity.serp:golduckw.name","textures/pokedex/055")
form1.button("entity.serp:mankeyw.name","textures/pokedex/056")
form1.button("entity.serp:primeapew.name","textures/pokedex/057")
form1.button("entity.serp:growlithew.name","textures/pokedex/058")
form1.button("entity.serp:arcaninew.name","textures/pokedex/059")
form1.button("entity.serp:poliwagw.name","textures/pokedex/060")
form1.button("entity.serp:poliwhirlw.name","textures/pokedex/061")
form1.button("entity.serp:poliwrathw.name","textures/pokedex/062")
form1.button("entity.serp:abraw.name","textures/pokedex/063")
form1.button("entity.serp:kadabraw.name","textures/pokedex/064")
form1.button("entity.serp:alakazamw.name","textures/pokedex/065")
form1.button("entity.serp:machopw.name","textures/pokedex/066")
form1.button("entity.serp:machokew.name","textures/pokedex/067")
form1.button("entity.serp:machampw.name","textures/pokedex/068")
form1.button("entity.serp:bellsproutw.name","textures/pokedex/069")
form1.button("entity.serp:weepinbellw.name","textures/pokedex/070")
form1.button("entity.serp:victreebelw.name","textures/pokedex/071")
form1.button("entity.serp:tentacoolw.name","textures/pokedex/072")
form1.button("entity.serp:tentacruelw.name","textures/pokedex/073")
form1.button("entity.serp:geodudew.name","textures/pokedex/074")
form1.button("entity.serp:gravelerw.name","textures/pokedex/075")
form1.button("entity.serp:golemw.name","textures/pokedex/076")
form1.button("entity.serp:ponytaw.name","textures/pokedex/077")
form1.button("entity.serp:rapidashw.name","textures/pokedex/078")
form1.button("entity.serp:slowpokew.name","textures/pokedex/079")
form1.button("entity.serp:slowbrow.name","textures/pokedex/080")
form1.button("entity.serp:magnemitew.name","textures/pokedex/081")
form1.button("entity.serp:magnetonw.name","textures/pokedex/082")
form1.button("entity.serp:farfetchdw.name","textures/pokedex/083")
form1.button("entity.serp:doduow.name","textures/pokedex/084")
form1.button("entity.serp:dodriow.name","textures/pokedex/085")
form1.button("entity.serp:seelw.name","textures/pokedex/086")
form1.button("entity.serp:dewgongw.name","textures/pokedex/087")
form1.button("entity.serp:grimerw.name","textures/pokedex/088")
form1.button("entity.serp:mukw.name","textures/pokedex/089")
form1.button("entity.serp:shellderw.name","textures/pokedex/090")
form1.button("entity.serp:cloysterw.name","textures/pokedex/091")
form1.button("entity.serp:gastlyw.name","textures/pokedex/092")
form1.button("entity.serp:haunterw.name","textures/pokedex/093")
form1.button("entity.serp:gengarw.name","textures/pokedex/094")
form1.button("entity.serp:onixw.name","textures/pokedex/095")
form1.button("entity.serp:drowzeew.name","textures/pokedex/096")
form1.button("entity.serp:hypnow.name","textures/pokedex/097")
form1.button("entity.serp:krabbyw.name","textures/pokedex/098")
form1.button("entity.serp:kinglerw.name","textures/pokedex/099")
form1.button("entity.serp:voltorbw.name","textures/pokedex/100")
form1.button("entity.serp:electrodew.name","textures/pokedex/101")
form1.button("entity.serp:exeggcutew.name","textures/pokedex/102")
form1.button("entity.serp:exeggutorw.name","textures/pokedex/103")
form1.button("entity.serp:cubonew.name","textures/pokedex/104")
form1.button("entity.serp:marowakw.name","textures/pokedex/105")
form1.button("entity.serp:hitmonleew.name","textures/pokedex/106")
form1.button("entity.serp:hitmonchanw.name","textures/pokedex/107")
form1.button("entity.serp:lickitungw.name","textures/pokedex/108")
form1.button("entity.serp:koffingw.name","textures/pokedex/109")
form1.button("entity.serp:weezingw.name","textures/pokedex/110")
form1.button("entity.serp:rhyhornw.name","textures/pokedex/111")
form1.button("entity.serp:rhydonw.name","textures/pokedex/112")
form1.button("entity.serp:chanseyw.name","textures/pokedex/113")
form1.button("entity.serp:tangelaw.name","textures/pokedex/114")
form1.button("entity.serp:kangaskhanw.name","textures/pokedex/115")
form1.button("entity.serp:horseaw.name","textures/pokedex/116")
form1.button("entity.serp:seadraw.name","textures/pokedex/117")
form1.button("entity.serp:goldeenw.name","textures/pokedex/118")
form1.button("entity.serp:seakingw.name","textures/pokedex/119")
form1.button("entity.serp:staryuw.name","textures/pokedex/120")
form1.button("entity.serp:starmiew.name","textures/pokedex/121")
form1.button("entity.serp:mrmimew.name","textures/pokedex/122")
form1.button("entity.serp:scytherw.name","textures/pokedex/123")
form1.button("entity.serp:jynxw.name","textures/pokedex/124")
form1.button("entity.serp:electabuzzw.name","textures/pokedex/125")
form1.button("entity.serp:magmarw.name","textures/pokedex/126")
form1.button("entity.serp:pinsirw.name","textures/pokedex/127")
form1.button("entity.serp:taurosw.name","textures/pokedex/128")
form1.button("entity.serp:magikarpw.name","textures/pokedex/129")
form1.button("entity.serp:gyaradosw.name","textures/pokedex/130")
form1.button("entity.serp:laprasw.name","textures/pokedex/131")
form1.button("entity.serp:dittow.name","textures/pokedex/132")
form1.button("entity.serp:eeveew.name","textures/pokedex/133")
form1.button("entity.serp:vaporeonw.name","textures/pokedex/134")
form1.button("entity.serp:jolteonw.name","textures/pokedex/135")
form1.button("entity.serp:flareonbw.name","textures/pokedex/136")
form1.button("entity.serp:porygonw.name","textures/pokedex/137")
form1.button("entity.serp:omanytew.name","textures/pokedex/138")
form1.button("entity.serp:omastarw.name","textures/pokedex/139")
form1.button("entity.serp:kabutow.name","textures/pokedex/140")
form1.button("entity.serp:kabutopsw.name","textures/pokedex/141")
form1.button("entity.serp:aerodactylw.name","textures/pokedex/142")
form1.button("entity.serp:snorlaxw.name","textures/pokedex/143")
form1.button("entity.serp:articunow.name","textures/pokedex/144")
form1.button("entity.serp:zapdosw.name","textures/pokedex/145")
form1.button("entity.serp:moltresw.name","textures/pokedex/146")
form1.button("entity.serp:dratiniw.name","textures/pokedex/147")
form1.button("entity.serp:dragonairw.name","textures/pokedex/148")
form1.button("entity.serp:dragonitew.name","textures/pokedex/149")
form1.button("entity.serp:mewtwow.name","textures/pokedex/150")
form1.button("entity.serp:meww.name","textures/pokedex/151")
form1.button("dayOneExperience.next")

let form2 = new ui.ActionFormData()
form2.title("Pokédex")
form2.body("2nd Gen")
form2.button("accessibility.button.back")
form2.button("entity.serp:chikoritaw.name","textures/pokedex/152")
form2.button("entity.serp:bayleefw.name","textures/pokedex/153")
form2.button("entity.serp:meganiumw.name","textures/pokedex/154")
form2.button("entity.serp:cyndaquilw.name","textures/pokedex/155")
form2.button("entity.serp:quilavaw.name","textures/pokedex/156")
form2.button("entity.serp:typhlosionw.name","textures/pokedex/157")
form2.button("entity.serp:totodilew.name","textures/pokedex/158")
form2.button("entity.serp:croconaww.name","textures/pokedex/159")
form2.button("entity.serp:feraligatrw.name","textures/pokedex/160")
form2.button("entity.serp:sentretw.name","textures/pokedex/161")
form2.button("entity.serp:furretw.name","textures/pokedex/162")
form2.button("entity.serp:hoothootw.name","textures/pokedex/163")
form2.button("entity.serp:noctowlw.name","textures/pokedex/164")
form2.button("entity.serp:ledybaw.name","textures/pokedex/165")
form2.button("entity.serp:ledianw.name","textures/pokedex/166")
form2.button("entity.serp:spinarakw.name","textures/pokedex/167")
form2.button("entity.serp:ariadosw.name","textures/pokedex/168")
form2.button("entity.serp:crobatw.name","textures/pokedex/169")
form2.button("entity.serp:chinchouw.name","textures/pokedex/170")
form2.button("entity.serp:lanturnw.name","textures/pokedex/171")
form2.button("entity.serp:pichuw.name","textures/pokedex/172")
form2.button("entity.serp:cleffaw.name","textures/pokedex/173")
form2.button("entity.serp:igglybuffw.name","textures/pokedex/174")
form2.button("entity.serp:togepiw.name","textures/pokedex/175")
form2.button("entity.serp:togeticw.name","textures/pokedex/176")
form2.button("entity.serp:natuw.name","textures/pokedex/177")
form2.button("entity.serp:xatuw.name","textures/pokedex/178")
form2.button("entity.serp:mareepw.name","textures/pokedex/179")
form2.button("entity.serp:flaaffyw.name","textures/pokedex/180")
form2.button("entity.serp:ampharosw.name","textures/pokedex/181")
form2.button("entity.serp:bellossomw.name","textures/pokedex/182")
form2.button("entity.serp:marillw.name","textures/pokedex/183")
form2.button("entity.serp:azumarillw.name","textures/pokedex/184")
form2.button("entity.serp:sudowoodow.name","textures/pokedex/185")
form2.button("entity.serp:politoedw.name","textures/pokedex/186")
form2.button("entity.serp:hoppipw.name","textures/pokedex/187")
form2.button("entity.serp:skiploomw.name","textures/pokedex/188")
form2.button("entity.serp:jumpluffw.name","textures/pokedex/189")
form2.button("entity.serp:aipomw.name","textures/pokedex/190")
form2.button("entity.serp:sunkernw.name","textures/pokedex/191")
form2.button("entity.serp:sunfloraw.name","textures/pokedex/192")
form2.button("entity.serp:yanmaw.name","textures/pokedex/193")
form2.button("entity.serp:wooperw.name","textures/pokedex/194")
form2.button("entity.serp:quagsirew.name","textures/pokedex/195")
form2.button("entity.serp:espeonw.name","textures/pokedex/196")
form2.button("entity.serp:umbreonw.name","textures/pokedex/197")
form2.button("entity.serp:murkroww.name","textures/pokedex/198")
form2.button("entity.serp:slowkingw.name","textures/pokedex/199")
form2.button("entity.serp:misdreavusw.name","textures/pokedex/200")
form2.button("entity.serp:unounw.name","textures/pokedex/201")
form2.button("entity.serp:wobbuffetw.name","textures/pokedex/202")
form2.button("entity.serp:girafarigw.name","textures/pokedex/203")
form2.button("entity.serp:pinecow.name","textures/pokedex/204")
form2.button("entity.serp:forretressw.name","textures/pokedex/205")
form2.button("entity.serp:dunsparcew.name","textures/pokedex/206")
form2.button("entity.serp:gligarw.name","textures/pokedex/207")
form2.button("entity.serp:steelixw.name","textures/pokedex/208")
form2.button("entity.serp:snubbullw.name","textures/pokedex/209")
form2.button("entity.serp:granbullw.name","textures/pokedex/210")
form2.button("entity.serp:qwilfishw.name","textures/pokedex/211")
form2.button("entity.serp:scizorw.name","textures/pokedex/212")
form2.button("entity.serp:shucklew.name","textures/pokedex/213")
form2.button("entity.serp:heracrossw.name","textures/pokedex/214")
form2.button("entity.serp:sneaselw.name","textures/pokedex/215")
form2.button("entity.serp:teddiursaw.name","textures/pokedex/216")
form2.button("entity.serp:ursaringw.name","textures/pokedex/217")
form2.button("entity.serp:slugmaw.name","textures/pokedex/218")
form2.button("entity.serp:magcargow.name","textures/pokedex/219")
form2.button("entity.serp:swinubw.name","textures/pokedex/220")
form2.button("entity.serp:piloswinew.name","textures/pokedex/221")
form2.button("entity.serp:corsolaw.name","textures/pokedex/222")
form2.button("entity.serp:remoraidw.name","textures/pokedex/223")
form2.button("entity.serp:octilleryw.name","textures/pokedex/224")
form2.button("entity.serp:delibirdw.name","textures/pokedex/225")
form2.button("entity.serp:mantinew.name","textures/pokedex/226")
form2.button("entity.serp:skarmoryw.name","textures/pokedex/227")
form2.button("entity.serp:houndourw.name","textures/pokedex/228")
form2.button("entity.serp:houndoomw.name","textures/pokedex/229")
form2.button("entity.serp:kingdraw.name","textures/pokedex/230")
form2.button("entity.serp:phanpyw.name","textures/pokedex/231")
form2.button("entity.serp:donphanw.name","textures/pokedex/232")
form2.button("entity.serp:porygon2w.name","textures/pokedex/233")
form2.button("entity.serp:stantlerw.name","textures/pokedex/234")
form2.button("entity.serp:smearglew.name","textures/pokedex/235")
form2.button("entity.serp:tyroguew.name","textures/pokedex/236")
form2.button("entity.serp:hitmontopw.name","textures/pokedex/237")
form2.button("entity.serp:smoochumw.name","textures/pokedex/238")
form2.button("entity.serp:elekidw.name","textures/pokedex/239")
form2.button("entity.serp:magbyw.name","textures/pokedex/240")
form2.button("entity.serp:miltankw.name","textures/pokedex/241")
form2.button("entity.serp:blisseyw.name","textures/pokedex/242")
form2.button("entity.serp:raikouw.name","textures/pokedex/243")
form2.button("entity.serp:enteiw.name","textures/pokedex/244")
form2.button("entity.serp:suicunew.name","textures/pokedex/245")
form2.button("entity.serp:larvitarw.name","textures/pokedex/246")
form2.button("entity.serp:pupitarw.name","textures/pokedex/247")
form2.button("entity.serp:tyranitarw.name","textures/pokedex/248")
form2.button("entity.serp:lugiaw.name","textures/pokedex/249")
form2.button("entity.serp:hoohw.name","textures/pokedex/250")
form2.button("entity.serp:celebiw.name","textures/pokedex/251")
form2.button("dayOneExperience.next")

let form3 = new ui.ActionFormData()
form3.title("Pokédex")
form3.body("3rd Gen")
form3.button("accessibility.button.back")

form3.button("dayOneExperience.next")

function page(player) {
    form.show(player).then(result => {
        let selection = result.selection
        if (selection == 0)
        {page0(player)}
        if (selection == 1)
        {pagedex(player)}
        if (selection == 2)
    {player.runCommand("execute @s[hasitem={item=serp:poke_ride}] ~~~ event entity @e[family=pokemon,family=tamed] serp:saddle")}
    })}

function pagedex(player) {
    formdex.show(player).then(result => {
        let selection = result.selection
        if (selection == 0)
        {page1(player)}
        if (selection == 1)
        {page2(player)}
    })}

function page0(player) {
    form0.show(player).then(result => {
        let selection = result.selection
        if (selection == 0)
    {player.runCommand("tag @s add use_slot0");player.runCommand("function spawn/call")}
        if (selection == 1)
    {player.runCommand("tag @s add use_slot1");player.runCommand("function spawn/call")}
        if (selection == 2)
    {player.runCommand("tag @s add use_slot2");player.runCommand("function spawn/call")}
        if (selection == 3)
    {player.runCommand("tag @s add use_slot3");player.runCommand("function spawn/call")}
        if (selection == 4)
    {player.runCommand("tag @s add use_slot4");player.runCommand("function spawn/call")}
        if (selection == 5)
    {player.runCommand("tag @s add use_slot5");player.runCommand("function spawn/call")}
    })}

function page1(player) {
    form1.show(player).then(result => {
        let selection = result.selection
        if (selection == 0)
        {pagedex(player)}
        if (selection == 1){player.runCommand("execute @s[tag=p1] ~~~ summon serp:dex ~~~ bulbasaur")}
        if (selection == 2){player.runCommand("execute @s[tag=p1] ~~~ summon serp:dex ~~~ ivysaur")}
        if (selection == 3){player
.runCommand("execute @s[tag=p1] ~~~ summon serp:dex ~~~ venusaur")}
        if (selection == 4){player.runCommand("execute @s[tag=p2] ~~~ summon serp:dex ~~~ charmander")}
        if (selection == 5){player.runCommand("execute @s[tag=p2] ~~~ summon serp:dex ~~~ charmeleon")}
        if (selection == 6){player.runCommand("execute @s[tag=p2] ~~~ summon serp:dex ~~~ charizard")}
        if (selection == 7){player
.runCommand("execute @s[tag=p3] ~~~ summon serp:dex ~~~ squirtle")}
        if (selection == 8){player.runCommand("execute @s[tag=p3] ~~~ summon serp:dex ~~~ wartortle")}
        if (selection == 9){player.runCommand("execute @s[tag=p3] ~~~ summon serp:dex ~~~ blastoise")}
        if (selection == 10){player.runCommand("execute @s[tag=p4] ~~~ summon serp:dex ~~~ caterpie")}
        if (selection == 11){player
.runCommand("execute @s[tag=p4] ~~~ summon serp:dex ~~~ metapod")}
        if (selection == 12){player.runCommand("execute @s[tag=p4] ~~~ summon serp:dex ~~~ butterfree")}
        if (selection == 13){player.runCommand("execute @s[tag=p5] ~~~ summon serp:dex ~~~ weedle")}
        if (selection == 14){player.runCommand("execute @s[tag=p5] ~~~ summon serp:dex ~~~ kakuna")}
        if (selection == 15){player
.runCommand("execute @s[tag=p5] ~~~ summon serp:dex ~~~ beedrill")}
        if (selection == 16){player.runCommand("execute @s[tag=p6] ~~~ summon serp:dex ~~~ pidgey")}
        if (selection == 17){player.runCommand("execute @s[tag=p6] ~~~ summon serp:dex ~~~ pidgeotto")}
        if (selection == 18){player.runCommand("execute @s[tag=p6] ~~~ summon serp:dex ~~~ pidgeot")}
        if (selection == 19){player
.runCommand("execute @s[tag=p7] ~~~ summon serp:dex ~~~ rattata")}
        if (selection == 20){player.runCommand("execute @s[tag=p7] ~~~ summon serp:dex ~~~ raticate")}
        if (selection == 21){player.runCommand("execute @s[tag=p8] ~~~ summon serp:dex ~~~ spearow")}
        if (selection == 22){player.runCommand("execute @s[tag=p8] ~~~ summon serp:dex ~~~ fearow")}
        if (selection == 23){player
.runCommand("execute @s[tag=p9] ~~~ summon serp:dex ~~~ ekans")}
        if (selection == 24){player.runCommand("execute @s[tag=p9] ~~~ summon serp:dex ~~~ arbok")}
        if (selection == 25){player.runCommand("execute @s[tag=p10] ~~~ summon serp:dex ~~~ pikachu")}
        if (selection == 26){player.runCommand("execute @s[tag=p10] ~~~ summon serp:dex ~~~ raichu")}
        if (selection == 27){player
.runCommand("execute @s[tag=p11] ~~~ summon serp:dex ~~~ sandsrew")}
        if (selection == 28){player.runCommand("execute @s[tag=p11] ~~~ summon serp:dex ~~~ sandslash")}
        if (selection == 29){player.runCommand("execute @s[tag=p12] ~~~ summon serp:dex ~~~ nidoranh")}
        if (selection == 30){player.runCommand("execute @s[tag=p12] ~~~ summon serp:dex ~~~ nidorina")}
        if (selection == 31){player.runCommand("execute @s[tag=p12] ~~~ summon serp:dex ~~~ nidoqueen")}
        if (selection == 32){player.runCommand("execute @s[tag=p13] ~~~ summon serp:dex ~~~ nidoram")}
        if (selection == 33){player
.runCommand("execute @s[tag=p13] ~~~ summon serp:dex ~~~ nidorino")}
        if (selection == 34){player.runCommand("execute @s[tag=p13] ~~~ summon serp:dex ~~~ nidoking")}
        if (selection == 35){player.runCommand("execute @s[tag=p14] ~~~ summon serp:dex ~~~ clefairy")}
        if (selection == 36){player.runCommand("execute @s[tag=p14] ~~~ summon serp:dex ~~~ cefable")}
        if (selection == 37){player
.runCommand("execute @s[tag=p15] ~~~ summon serp:dex ~~~ vulpix")}
        if (selection == 38){player.runCommand("execute @s[tag=p15] ~~~ summon serp:dex ~~~ ninetales")}
        if (selection == 39){player.runCommand("execute @s[tag=p16] ~~~ summon serp:dex ~~~ jigglypuff")}
        if (selection == 40){player.runCommand("execute @s[tag=p16] ~~~ summon serp:dex ~~~ wigglytuff")}
        if (selection == 41){player
.runCommand("execute @s[tag=p17] ~~~ summon serp:dex ~~~ zubat")}
        if (selection == 42){player.runCommand("execute @s[tag=p17] ~~~ summon serp:dex ~~~ golbat")}
        if (selection == 43){player.runCommand("execute @s[tag=p18] ~~~ summon serp:dex ~~~ oddish")}
        if (selection == 44){player.runCommand("execute @s[tag=p18] ~~~ summon serp:dex ~~~ gloom")}
        if (selection == 45){player
.runCommand("execute @s[tag=p18] ~~~ summon serp:dex ~~~ vileplume")}
        if (selection == 46){player.runCommand("execute @s[tag=p19] ~~~ summon serp:dex ~~~ paras")}
        if (selection == 47){player.runCommand("execute @s[tag=p19] ~~~ summon serp:dex ~~~ parasect")}
        if (selection == 48){player.runCommand("execute @s[tag=p20] ~~~ summon serp:dex ~~~ venonat")}
        if (selection == 49){player
.runCommand("execute @s[tag=p20] ~~~ summon serp:dex ~~~ venomoth")}
        if (selection == 50){player.runCommand("execute @s[tag=p21] ~~~ summon serp:dex ~~~ diglett")}
        if (selection == 51){player.runCommand("execute @s[tag=p21] ~~~ summon serp:dex ~~~ dugtrio")}
        if (selection == 52){player.runCommand("execute @s[tag=p22] ~~~ summon serp:dex ~~~ meowth")}
        if (selection == 53){player
.runCommand("execute @s[tag=p22] ~~~ summon serp:dex ~~~ persian")}
        if (selection == 54){player.runCommand("execute @s[tag=p23] ~~~ summon serp:dex ~~~ psyduck")}
        if (selection == 55){player.runCommand("execute @s[tag=p23] ~~~ summon serp:dex ~~~ golduck")}
        if (selection == 56){player.runCommand("execute @s[tag=p24] ~~~ summon serp:dex ~~~ mankey")}
        if (selection == 57){player
.runCommand("execute @s[tag=p24] ~~~ summon serp:dex ~~~ primeape")}
        if (selection == 58){player.runCommand("execute @s[tag=p25] ~~~ summon serp:dex ~~~ growlithe")}
        if (selection == 59){player.runCommand("execute @s[tag=p25] ~~~ summon serp:dex ~~~ arcanine")}
        if (selection == 60){player.runCommand("execute @s[tag=p26] ~~~ summon serp:dex ~~~ poliwag")}
        if (selection == 61){player.runCommand("execute @s[tag=p26] ~~~ summon serp:dex ~~~ poliwhirl")}
        if (selection == 62){player.runCommand("execute @s[tag=p26] ~~~ summon serp:dex ~~~ poliwrath")}
        if (selection == 63){player
.runCommand("execute @s[tag=p27] ~~~ summon serp:dex ~~~ abra")}
        if (selection == 64){player.runCommand("execute @s[tag=p27] ~~~ summon serp:dex ~~~ kadabra")}
        if (selection == 65){player.runCommand("execute @s[tag=p27] ~~~ summon serp:dex ~~~ alakazam")}
        if (selection == 66){player.runCommand("execute @s[tag=p28] ~~~ summon serp:dex ~~~ machop")}
        if (selection == 67){player
.runCommand("execute @s[tag=p28] ~~~ summon serp:dex ~~~ machoke")}
        if (selection == 68){player.runCommand("execute @s[tag=p28] ~~~ summon serp:dex ~~~ machamp")}
        if (selection == 69){player.runCommand("execute @s[tag=p29] ~~~ summon serp:dex ~~~ bellsprout")}
        if (selection == 70){player.runCommand("execute @s[tag=p29] ~~~ summon serp:dex ~~~ weenpinbell")}
        if (selection == 71){player
.runCommand("execute @s[tag=p29] ~~~ summon serp:dex ~~~ victreebel")}
        if (selection == 72){player.runCommand("execute @s[tag=p30] ~~~ summon serp:dex ~~~ tentacool")}
        if (selection == 73){player.runCommand("execute @s[tag=p30] ~~~ summon serp:dex ~~~ tentacruel")}
        if (selection == 74){player.runCommand("execute @s[tag=p31] ~~~ summon serp:dex ~~~ geodude")}
        if (selection == 75){player
.runCommand("execute @s[tag=p31] ~~~ summon serp:dex ~~~ graveler")}
        if (selection == 76){player.runCommand("execute @s[tag=p31] ~~~ summon serp:dex ~~~ golem")}
        if (selection == 77){player.runCommand("execute @s[tag=p32] ~~~ summon serp:dex ~~~ ponyta")}
        if (selection == 78){player.runCommand("execute @s[tag=p32] ~~~ summon serp:dex ~~~ rapidash")}
        if (selection == 79){player
.runCommand("execute @s[tag=p33] ~~~ summon serp:dex ~~~ slowpoke")}
        if (selection == 80){player.runCommand("execute @s[tag=p33] ~~~ summon serp:dex ~~~ slowbro")}
        if (selection == 81){player.runCommand("execute @s[tag=p34] ~~~ summon serp:dex ~~~ magnemite")}
        if (selection == 82){player.runCommand("execute @s[tag=p34] ~~~ summon serp:dex ~~~ magneton")}
        if (selection == 83){player
.runCommand("execute @s[tag=p35] ~~~ summon serp:dex ~~~ farfetchd")}
        if (selection == 84){player.runCommand("execute @s[tag=p35] ~~~ summon serp:dex ~~~ doduo")}
        if (selection == 85){player.runCommand("execute @s[tag=p35] ~~~ summon serp:dex ~~~ dodrio")}
        if (selection == 86){player.runCommand("execute @s[tag=p36] ~~~ summon serp:dex ~~~ seel")}
        if (selection == 87){player
.runCommand("execute @s[tag=p36] ~~~ summon serp:dex ~~~ dewgong")}
        if (selection == 88){player.runCommand("execute @s[tag=p37] ~~~ summon serp:dex ~~~ grimer")}
        if (selection == 89){player.runCommand("execute @s[tag=p37] ~~~ summon serp:dex ~~~ muk")}
        if (selection == 90){player.runCommand("execute @s[tag=p38] ~~~ summon serp:dex ~~~ shellder")}
        if (selection == 91){player.runCommand("execute @s[tag=p38] ~~~ summon serp:dex ~~~ cloyster")}
        if (selection == 92){player.runCommand("execute @s[tag=p39] ~~~ summon serp:dex ~~~ gastly")}
        if (selection == 93){player
.runCommand("execute @s[tag=p39] ~~~ summon serp:dex ~~~ haunter")}
        if (selection == 94){player.runCommand("execute @s[tag=p39] ~~~ summon serp:dex ~~~ gengar")}
        if (selection == 95){player.runCommand("execute @s[tag=p40] ~~~ summon serp:dex ~~~ onix")}
        if (selection == 96){player.runCommand("execute @s[tag=p41] ~~~ summon serp:dex ~~~ drowzee")}
        if (selection == 97){player
.runCommand("execute @s[tag=p41] ~~~ summon serp:dex ~~~ hypno")}
        if (selection == 98){player.runCommand("execute @s[tag=p42] ~~~ summon serp:dex ~~~ krabby")}
        if (selection == 99){player.runCommand("execute @s[tag=p42] ~~~ summon serp:dex ~~~ kingler")}
        if (selection == 100){player.runCommand("execute @s[tag=p43] ~~~ summon serp:dex ~~~ voltorb")}
        if (selection == 101){player
.runCommand("execute @s[tag=p43] ~~~ summon serp:dex ~~~ electrode")}
        if (selection == 102){player.runCommand("execute @s[tag=p44] ~~~ summon serp:dex ~~~ exeggcute")}
        if (selection == 103){player.runCommand("execute @s[tag=p44] ~~~ summon serp:dex ~~~ exeggutor")}
        if (selection == 104){player.runCommand("execute @s[tag=p45] ~~~ summon serp:dex ~~~ cubone")}
        if (selection == 105){player
.runCommand("execute @s[tag=p45] ~~~ summon serp:dex ~~~ marowak")}
        if (selection == 106){player.runCommand("execute @s[tag=p46] ~~~ summon serp:dex ~~~ hitmonlee")}
        if (selection == 107){player.runCommand("execute @s[tag=p46] ~~~ summon serp:dex ~~~ hitmonchan")}
        if (selection == 108){player.runCommand("execute @s[tag=p47] ~~~ summon serp:dex ~~~ lickitung")}
        if (selection == 109){player
.runCommand("execute @s[tag=p48] ~~~ summon serp:dex ~~~ koffing")}
        if (selection == 110){player.runCommand("execute @s[tag=p48] ~~~ summon serp:dex ~~~ weezing")}
        if (selection == 111){player.runCommand("execute @s[tag=p49] ~~~ summon serp:dex ~~~ rhyhorn")}
        if (selection == 112){player.runCommand("execute @s[tag=p49] ~~~ summon serp:dex ~~~ rhydon")}
        if (selection == 113){player
.runCommand("execute @s[tag=p50] ~~~ summon serp:dex ~~~ chansey")}
        if (selection == 114){player.runCommand("execute @s[tag=p51] ~~~ summon serp:dex ~~~ tangela")}
        if (selection == 115){player.runCommand("execute @s[tag=p52] ~~~ summon serp:dex ~~~ kangaskhan")}
        if (selection == 116){player.runCommand("execute @s[tag=p53] ~~~ summon serp:dex ~~~ horsea")}
        if (selection == 117){player.runCommand("execute @s[tag=p53] ~~~ summon serp:dex ~~~ seadra")}
        if (selection == 118){player.runCommand("execute @s[tag=p54] ~~~ summon serp:dex ~~~ goldeen")}
        if (selection == 119){player.runCommand("execute @s[tag=p54] ~~~ summon serp:dex ~~~ seaking")}
        if (selection == 120){player
.runCommand("execute @s[tag=p55] ~~~ summon serp:dex ~~~ staryu")}
        if (selection == 121){player.runCommand("execute @s[tag=p56] ~~~ summon serp:dex ~~~ starmie")}
        if (selection == 122){player.runCommand("execute @s[tag=p57] ~~~ summon serp:dex ~~~ mrmime")}
        if (selection == 123){player.runCommand("execute @s[tag=p58] ~~~ summon serp:dex ~~~ scyther")}
        if (selection == 124){player
.runCommand("execute @s[tag=p59] ~~~ summon serp:dex ~~~ jynx")}
        if (selection == 125){player.runCommand("execute @s[tag=p60] ~~~ summon serp:dex ~~~ electabuzz")}
        if (selection == 126){player.runCommand("execute @s[tag=p61] ~~~ summon serp:dex ~~~ magmar")}
        if (selection == 127){player.runCommand("execute @s[tag=p62] ~~~ summon serp:dex ~~~ pinsir")}
        if (selection == 128){player.runCommand("execute @s[tag=p63] ~~~ summon serp:dex ~~~ tauros")}
        if (selection == 129){player.runCommand("execute @s[tag=p64] ~~~ summon serp:dex ~~~ magikarp")}
        if (selection == 130){player
.runCommand("execute @s[tag=p64] ~~~ summon serp:dex ~~~ gyarados")}
        if (selection == 131){player.runCommand("execute @s[tag=p65] ~~~ summon serp:dex ~~~ lapras")}
        if (selection == 132){player.runCommand("execute @s[tag=p66] ~~~ summon serp:dex ~~~ ditto")}
        if (selection == 133){player.runCommand("execute @s[tag=p67] ~~~ summon serp:dex ~~~ eevee")}
        if (selection == 134){player
.runCommand("execute @s[tag=p67] ~~~ summon serp:dex ~~~ vaporeon")}
        if (selection == 135){player.runCommand("execute @s[tag=p67] ~~~ summon serp:dex ~~~ jolteon")}
        if (selection == 136){player.runCommand("execute @s[tag=p67] ~~~ summon serp:dex ~~~ flareon")}
        if (selection == 137){player.runCommand("execute @s[tag=p68] ~~~ summon serp:dex ~~~ porygon")}
        if (selection == 138){player
.runCommand("execute @s[tag=p69] ~~~ summon serp:dex ~~~ omanyte")}
        if (selection == 139){player.runCommand("execute @s[tag=p69] ~~~ summon serp:dex ~~~ omastar")}
        if (selection == 140){player.runCommand("execute @s[tag=p70] ~~~ summon serp:dex ~~~ kabuto")}
        if (selection == 141){player.runCommand("execute @s[tag=p70] ~~~ summon serp:dex ~~~ kabutops")}
        if (selection == 142){player
.runCommand("execute @s[tag=p71] ~~~ summon serp:dex ~~~ aerodactyl")}
        if (selection == 143){player.runCommand("execute @s[tag=p72] ~~~ summon serp:dex ~~~ snorlax")}
        if (selection == 144){player.runCommand("execute @s[tag=p73] ~~~ summon serp:dex ~~~ articuno")}
        if (selection == 145){player.runCommand("execute @s[tag=p74] ~~~ summon serp:dex ~~~ zapdos")}
        if (selection == 146){player
.runCommand("execute @s[tag=p75] ~~~ summon serp:dex ~~~ moltres")}
        if (selection == 147){player.runCommand("execute @s[tag=p76] ~~~ summon serp:dex ~~~ dratini")}
        if (selection == 148){player.runCommand("execute @s[tag=p76] ~~~ summon serp:dex ~~~ dragonair")}
        if (selection == 149){player.runCommand("execute @s[tag=p76] ~~~ summon serp:dex ~~~ dragonite")}
        if (selection == 150){player
.runCommand("execute @s[tag=p77] ~~~ summon serp:dex ~~~ mewtwo")}
        if (selection == 151){player.runCommand("execute @s[tag=p78] ~~~ summon serp:dex ~~~ mew")}
        if (selection == 152)
        {pagedex(player)}
    })}

function page2(player) {
    form2.show(player).then(result => {
        let selection = result.selection
        if (selection == 0)
        {pagedex(player)}
        if (selection == 1){player.runCommand("execute @s[tag=p79] ~~~ summon serp:dex2 ~~~ chikorita")}
        if (selection == 2){player.runCommand("execute @s[tag=p79] ~~~ summon serp:dex2 ~~~ bayleef")}
        if (selection == 3){player.runCommand("execute @s[tag=p79] ~~~ summon serp:dex2 ~~~ meganium")}
        if (selection == 4){player.runCommand("execute @s[tag=p80] ~~~ summon serp:dex2 ~~~ cyndaquil")}
        if (selection == 5){player.runCommand("execute @s[tag=p80] ~~~ summon serp:dex2 ~~~ quilava")}
        if (selection == 6){player.runCommand("execute @s[tag=p80] ~~~ summon serp:dex2 ~~~ typhlosion")}
        if (selection == 7){player.runCommand("execute @s[tag=p81] ~~~ summon serp:dex2 ~~~ totodile")}
        if (selection == 8){player.runCommand("execute @s[tag=p81] ~~~ summon serp:dex2 ~~~ croconaw")}
        if (selection == 9){player.runCommand("execute @s[tag=p81] ~~~ summon serp:dex2 ~~~ feraligatr")}
        if (selection == 10){player.runCommand("execute @s[tag=p82] ~~~ summon serp:dex2 ~~~ sentret")}
        if (selection == 11){player.runCommand("execute @s[tag=p82] ~~~ summon serp:dex2 ~~~ furret")}
        if (selection == 12){player.runCommand("execute @s[tag= p83] ~~~ summon serp:dex2 ~~~ hoothoot")}
        if (selection == 13){player.runCommand("execute @s[tag=p83] ~~~ summon serp:dex2 ~~~ noctowl")}
        if (selection == 14){player.runCommand("execute @s[tag=p84] ~~~ summon serp:dex2 ~~~ ledyba")}
        if (selection == 15){player.runCommand("execute @s[tag=p84] ~~~ summon serp:dex2 ~~~ ledian")}
        if (selection == 16){player.runCommand("execute @s[tag=p85] ~~~ summon serp:dex2 ~~~ spinarak")}
        if (selection == 17){player.runCommand("execute @s[tag=p85] ~~~ summon serp:dex2 ~~~ ariados")}
        if (selection == 18){player.runCommand("execute @s[tag=p17] ~~~ summon serp:dex2 ~~~ crobat")}
        if (selection == 19){player.runCommand("execute @s[tag=p86] ~~~ summon serp:dex2 ~~~ chinchou")}
        if (selection == 20){player.runCommand("execute @s[tag=p86] ~~~ summon serp:dex2 ~~~ lanturn")}
        if (selection == 21){player.runCommand("execute @s[tag=p10] ~~~ summon serp:dex2 ~~~ pichu")}
        if (selection == 22){player.runCommand("execute @s[tag=p14] ~~~ summon serp:dex2 ~~~ cleffa")}
        if (selection == 23){player.runCommand("execute @s[tag=p16] ~~~ summon serp:dex2 ~~~ igglybuff")}
        if (selection == 24){player.runCommand("execute @s[tag=p87] ~~~ summon serp:dex2 ~~~ togepi")}
        if (selection == 25){player.runCommand("execute @s[tag=p87] ~~~ summon serp:dex2 ~~~ togetic")}
        if (selection == 26){player.runCommand("execute @s[tag=p88] ~~~ summon serp:dex2 ~~~ natu")}
        if (selection == 27){player.runCommand("execute @s[tag=p88] ~~~ summon serp:dex2 ~~~ xatu")}
        if (selection == 28){player.runCommand("execute @s[tag=p89] ~~~ summon serp:dex2 ~~~ mareep")}
        if (selection == 29){player.runCommand("execute @s[tag=p89] ~~~ summon serp:dex2 ~~~ flaaffy")}
        if (selection == 30){player.runCommand("execute @s[tag=p89] ~~~ summon serp:dex2 ~~~ ampharos")}
        if (selection == 31){player.runCommand("execute @s[tag=p18] ~~~ summon serp:dex2 ~~~ bellossom")}
        if (selection == 32){player.runCommand("execute @s[tag=p90] ~~~ summon serp:dex2 ~~~ marill")}
        if (selection == 33){player.runCommand("execute @s[tag=p90] ~~~ summon serp:dex2 ~~~ azumarill")}
        if (selection == 34){player.runCommand("execute @s[tag=p91] ~~~ summon serp:dex2 ~~~ sudowoodo")}
        if (selection == 35){player.runCommand("execute @s[tag=p26] ~~~ summon serp:dex2 ~~~ politoed")}
        if (selection == 36){player.runCommand("execute @s[tag=p92] ~~~ summon serp:dex2 ~~~ hoppip")}
        if (selection == 37){player.runCommand("execute @s[tag=p92] ~~~ summon serp:dex2 ~~~ skiploom")}
        if (selection == 38){player.runCommand("execute @s[tag=p92] ~~~ summon serp:dex2 ~~~ jumpluff")}
        if (selection == 39){player.runCommand("execute @s[tag=p93] ~~~ summon serp:dex2 ~~~ aipom")}
        if (selection == 40){player.runCommand("execute @s[tag=p94] ~~~ summon serp:dex2 ~~~ sunkern")}
        if (selection == 41){player.runCommand("execute @s[tag=p94] ~~~ summon serp:dex2 ~~~ sunflora")}
        if (selection == 42){player.runCommand("execute @s[tag=p95] ~~~ summon serp:dex2 ~~~ yanma")}
        if (selection == 43){player.runCommand("execute @s[tag=p96] ~~~ summon serp:dex2 ~~~ wooper")}
        if (selection == 44){player.runCommand("execute @s[tag=p96] ~~~ summon serp:dex2 ~~~ quagsire")}
        if (selection == 45){player.runCommand("execute @s[tag=p67] ~~~ summon serp:dex2 ~~~ espeon")}
        if (selection == 46){player.runCommand("execute @s[tag=p67] ~~~ summon serp:dex2 ~~~ umbreon")}
        if (selection == 47){player.runCommand("execute @s[tag=p97] ~~~ summon serp:dex2 ~~~ murkrow")}
        if (selection == 48){player.runCommand("execute @s[tag=p33] ~~~ summon serp:dex2 ~~~ slowking")}
        if (selection == 49){player.runCommand("execute @s[tag=p98] ~~~ summon serp:dex2 ~~~ misdreavus")}
        if (selection == 50){player.runCommand("execute @s[tag=p99] ~~~ summon serp:dex2 ~~~ unoun")}
        if (selection == 51){player.runCommand("execute @s[tag=p100] ~~~ summon serp:dex2 ~~~ wobbuffet")}
        if (selection == 52){player.runCommand("execute @s[tag=p101] ~~~ summon serp:dex2 ~~~ girafarig")}
        if (selection == 53){player.runCommand("execute @s[tag=p102] ~~~ summon serp:dex2 ~~~ pineco")}
        if (selection == 54){player.runCommand("execute @s[tag=p102] ~~~ summon serp:dex2 ~~~ forretress")}
        if (selection == 55){player.runCommand("execute @s[tag=p103] ~~~ summon serp:dex2 ~~~ dunsparce")}
        if (selection == 56){player.runCommand("execute @s[tag=p104] ~~~ summon serp:dex2 ~~~ gligar")}
        if (selection == 57){player.runCommand("execute @s[tag=p40] ~~~ summon serp:dex2 ~~~ steelix")}
        if (selection == 58){player.runCommand("execute @s[tag=p105] ~~~ summon serp:dex2 ~~~ snubbull")}
        if (selection == 59){player.runCommand("execute @s[tag=p105] ~~~ summon serp:dex2 ~~~ granbull")}
        if (selection == 60){player.runCommand("execute @s[tag=p106] ~~~ summon serp:dex2 ~~~ qwilfish")}
        if (selection == 61){player.runCommand("execute @s[tag=p58] ~~~ summon serp:dex2 ~~~ scizor")}
        if (selection == 62){player.runCommand("execute @s[tag=p107] ~~~ summon serp:dex2 ~~~ shuckle")}
        if (selection == 63){player.runCommand("execute @s[tag=p108] ~~~ summon serp:dex2 ~~~ heracross")}
        if (selection == 64){player.runCommand("execute @s[tag=p109] ~~~ summon serp:dex2 ~~~ sneasel")}
        if (selection == 65){player.runCommand("execute @s[tag=p110] ~~~ summon serp:dex2 ~~~ teddiursa")}
        if (selection == 66){player.runCommand("execute @s[tag=p110] ~~~ summon serp:dex2 ~~~ ursaring")}
        if (selection == 67){player.runCommand("execute @s[tag=p111] ~~~ summon serp:dex2 ~~~ slugma")}
        if (selection == 68){player.runCommand("execute @s[tag=p111] ~~~ summon serp:dex2 ~~~ magcargo")}
        if (selection == 69){player.runCommand("execute @s[tag=p112] ~~~ summon serp:dex2 ~~~ swinub")}
        if (selection == 70){player.runCommand("execute @s[tag=p112] ~~~ summon serp:dex2 ~~~ piloswine")}
        if (selection == 71){player.runCommand("execute @s[tag=p113] ~~~ summon serp:dex2 ~~~ corsola")}
        if (selection == 72){player.runCommand("execute @s[tag=p114] ~~~ summon serp:dex2 ~~~ remoraid")}
        if (selection == 73){player.runCommand("execute @s[tag=p114] ~~~ summon serp:dex2 ~~~ octillery")}
        if (selection == 74){player.runCommand("execute @s[tag=p115] ~~~ summon serp:dex2 ~~~ delibird")}
        if (selection == 75){player.runCommand("execute @s[tag=p116] ~~~ summon serp:dex2 ~~~ mantine")}
        if (selection == 76){player.runCommand("execute @s[tag=p117] ~~~ summon serp:dex2 ~~~ skarmory")}
        if (selection == 77){player.runCommand("execute @s[tag=p118] ~~~ summon serp:dex2 ~~~ houndour")}
        if (selection == 78){player.runCommand("execute @s[tag=p118] ~~~ summon serp:dex2 ~~~ houndoom")}
        if (selection == 79){player.runCommand("execute @s[tag=p53] ~~~ summon serp:dex2 ~~~ kingdra")}
        if (selection == 80){player.runCommand("execute @s[tag=p119] ~~~ summon serp:dex2 ~~~ phanpy")}
        if (selection == 81){player.runCommand("execute @s[tag=p119] ~~~ summon serp:dex2 ~~~ donphan")}
        if (selection == 82){player.runCommand("execute @s[tag=p68] ~~~ summon serp:dex2 ~~~ porygon2")}
        if (selection == 83){player.runCommand("execute @s[tag=p120] ~~~ summon serp:dex2 ~~~ stantler")}
        if (selection == 84){player.runCommand("execute @s[tag=p121] ~~~ summon serp:dex2 ~~~ smeargle")}
        if (selection == 85){player.runCommand("execute @s[tag=p46] ~~~ summon serp:dex2 ~~~ tyrogue")}
        if (selection == 86){player.runCommand("execute @s[tag=p46] ~~~ summon serp:dex2 ~~~ hitmontop")}
        if (selection == 87){player.runCommand("execute @s[tag=p59] ~~~ summon serp:dex2 ~~~ smoochum")}
        if (selection == 88){player.runCommand("execute @s[tag=p60] ~~~ summon serp:dex2 ~~~ elekid")}
        if (selection == 89){player.runCommand("execute @s[tag=p61] ~~~ summon serp:dex2 ~~~ magby")}
        if (selection == 90){player.runCommand("execute @s[tag=p122] ~~~ summon serp:dex2 ~~~ miltank")}
        if (selection == 91){player.runCommand("execute @s[tag=p50] ~~~ summon serp:dex2 ~~~ blissey")}
        if (selection == 92){player.runCommand("execute @s[tag=p123] ~~~ summon serp:dex2 ~~~ raikou")}
        if (selection == 93){player.runCommand("execute @s[tag=p124] ~~~ summon serp:dex2 ~~~ entei")}
        if (selection == 94){player.runCommand("execute @s[tag=p125] ~~~ summon serp:dex2 ~~~ suicune")}
        if (selection == 95){player.runCommand("execute @s[tag=p126] ~~~ summon serp:dex2 ~~~ larvitar")}
        if (selection == 96){player.runCommand("execute @s[tag=p126] ~~~ summon serp:dex2 ~~~ pupitar")}
        if (selection == 97){player.runCommand("execute @s[tag=p126] ~~~ summon serp:dex2 ~~~ tyranitar")}
        if (selection == 98){player.runCommand("execute @s[tag=p127] ~~~ summon serp:dex2 ~~~ lugia")}
        if (selection == 99){player.runCommand("execute @s[tag=p128] ~~~ summon serp:dex2 ~~~ hooh")}
        if (selection == 100){player.runCommand("execute @s[tag=p129] ~~~ summon serp:dex2 ~~~ celebi")}
        if (selection == 101)
        {pagedex(player)}
    })}

function page3(player) {
    form3.show(player).then(result => {
        let selection = result.selection
        if (selection == 0)
        {pagedex(player)}
    })}

world.events.beforeItemUse.subscribe(eventData => {
    let player = eventData.source
    let item = eventData.item
    if (item.id == "minecraft:compass")
        {page(player)}
})