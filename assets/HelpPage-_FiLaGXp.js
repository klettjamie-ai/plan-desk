import{o as e}from"./rolldown-runtime-BCiCTKAo.js";import{l as t,m as n,r,t as i}from"./jsx-runtime--hzNV5dX.js";var a=e(n(),1),o=`# Code & Contract

A short guide for using Code & Contract at the desk. It keeps drawings, agreements, the code for the job, and an envelope check in the browser. Nothing is uploaded to an account.

Open it at [https://klettjamie-ai.github.io/plan-desk/](https://klettjamie-ai.github.io/plan-desk/).

The bar across the top says **Code & Contract**. On a wide screen it also shows **Projects**, **Code**, **Help**, and **Settings**. On a phone those four are icons. Tap **Code & Contract** any time to come back to the project list. Tap **Help** to open this guide.

## Put it on the home screen

Code & Contract can sit next to your other apps. You do this from the browser. There is no install button inside the site.

**iPad or iPhone (Safari).** Open the address above. Tap the Share button, then **Add to Home Screen**. Leave the name as Code & Contract and tap Add. The icon opens the site full screen.

**Android (Chrome).** Open the address. Tap the menu (three dots) and choose **Install app** or **Add to Home screen**.

**Desktop (Chrome or Edge).** Open the address. Look for an install icon at the right end of the address bar, or open the browser menu and choose **Install Code & Contract**.

After it is installed, drawings you have already opened can be viewed again without a network. Looking up a new address, and asking a model a question, still need a connection.

## Where the work is stored

Everything you type and every file you add stays in this browser on this device. A different browser, or the same browser on another computer, starts empty.

If you clear this site’s data, or the browser’s history and site data, the projects go with it. Make a backup before you do that.

**Export backup** is on the **Projects** page and again under **Settings**, in the **Backup** section. It downloads a file named \`code-and-contract-backup.zip\`. An older file named \`plan-desk-backup.zip\` still imports. That zip holds projects, drawings, contracts, markups, comments, the code worksheet, and the energy check. It does not hold the model key.

**Import backup** reads that zip back in. On **Projects**, tap **Import backup** and choose the zip. On **Settings**, the same button is next to **Export backup**. You will see “Backup added to this browser.” or “Backup added.”

**Remove all projects**, under **Settings**, asks you to confirm. It clears the projects and leaves the model key. This cannot be undone unless you still have the zip.

## The model key

Code & Contract works with no key. You can open drawings, mark them up, export a marked-up PDF and a comment list, compare two agreements, look up the code cards, run the worksheet, and complete an energy check.

A key is only for a live reading: **Review this sheet**, **Review this agreement**, and **Ask** on the code page. Without a key, those buttons still answer, from a built-in reading or a built-in checklist, and the page says so.

To add a key, open **Settings**. The section is **Model key**.

1. Choose **Grok** or **ChatGPT**.
2. Paste the key into **Key**. **Show** lets you check what you pasted. **Hide** covers it again.
3. **Model name** is filled in for you: \`grok-4\` for Grok, \`gpt-4o\` for ChatGPT. Change it only if your account uses a different name. Drawing review needs a model that can see a picture.
4. Tap **Save key**. The page says “Saved on this browser only.”
5. Tap **Check the key**. A good result says “Connected. The model answered.”

**Where the key comes from**

- Grok is from xAI. Sign in at [https://console.x.ai/](https://console.x.ai/) and create an API key there.
- ChatGPT is from OpenAI. Sign in at [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys) and create a key there.

The key stays on this device. It is left out of backups. It is sent only when you ask that service a question. Some services refuse a call that comes straight from a browser. If **Check the key** fails for that reason, the rest of the desk still works.

## Start a project

On **Projects**, tap **New project**.

The box is titled **New project**. “A name and an address are enough to start.”

- **Project name**
- **Address or location** (for example \`400 River Drive, Watertown, WI\`)
- **Building type**: Clubhouse, Office, Restaurant, School, Store, Apartment building, One-family house, Two-family house, Warehouse, or Other
- **Occupancy**: A-2, A-3, B, E, M, R-2, R-3, S-1, or U
- **Construction type**: IA through VB, including the Type IV choices
- **Area, square feet**
- **Stories**
- **Notes**

Tap **Save project**. **Cancel** closes the box without saving.

Each project card shows the name, the address, and buttons for **Review drawings**, **Contracts**, and **Code**. Open any of those. Along the top of the project you then have **Drawings**, **Contracts**, **Energy**, and **Code**.

**Edit** changes the same fields. **Remove** deletes that project from this browser after you confirm.

The address is what the energy check uses to pick a Wisconsin climate zone. Write the city and state the way you would on a title block. Watertown, WI and Brookfield, WI are recognized. Jefferson County and Waukesha County are recognized if you type the county name.

## Drawing review

Open the project and stay on **Drawings**.

If the project has one drawing set, it opens that set. If it has none, you see “No drawings on [project] yet.” Tap **Add a drawing set** and choose a PDF. The file stays on this device.

On the sheet:

- Thumbnails down the side change pages.
- **Pan** moves the sheet. You can also pinch or scroll.
- **Zoom out**, **Zoom in**, and **Fit** change the size.
- **Cloud**, **Arrow**, **Highlight**: press and drag on the sheet.
- **Text**: tap the sheet, type the note, tap **Save**.
- **Comment**: tap the sheet. The box is titled **Comment**, with “Pin a note on this sheet.” Type it and tap **Save**. The comment starts as open.
- **Scale**: drag along a dimension you already trust, such as an overall building length. The box is titled **How long is that line?** Type the **Real length** and choose feet, inches, or meters. Tap **Save scale**. The sheet then says “Scale is set from a … line on this sheet.”
- **Measure**: after the scale is set, drag a line. The length uses that scale.

Tap a markup to select it. Press Delete to remove it.

The **Comments** panel is on the right. On a phone, tap **Comments** to open it and **Close** to put it away. The filters are **open**, **resolved**, and **all**. **Mark resolved** and **Reopen** change a note. **Remove** deletes it.

**Review this sheet** reads the page that is open. With a key, the items come back with a note that says they were read from the model. **Accept** turns an item into a comment. **Dismiss** drops it. Without a key, you get a built-in reading of that sheet so you can still try the steps. The amber note on the panel is the reminder to check the sheet yourself.

**Marked-up PDF** downloads the sheets with the clouds, arrows, text, highlights, and measures drawn on them. **Comments CSV** downloads the comment list for a spreadsheet. **Back to drawings** returns to the list when more than one set is on the project.

## Contract review

On the project, open **Contracts**.

Tap **Add a contract** and choose a PDF or a Word file (\`.docx\`). The file stays on this device.

The left side is **Outline**. Tap a heading to jump to it.

**Review this agreement** reads the text for the usual trouble spots:

- Indemnity broader than the architect’s own negligence
- A raised standard of care, or a warranty of the documents
- Liability with no limit
- Payment that depends on the owner’s lender
- Extra services folded into the basic fee
- The owner taking the drawings outright
- Insurance limits, or an additional-insured demand, that do not match a practice policy
- Termination for convenience that does not pay for work already done
- Disputes sent to a distant court, or mediation waived
- Liquidated damages tied to a date the owner has not set

Each flag has a severity, the clause it sits in, a plain explanation, the sentence it came from, and **A calmer version**. **Copy wording** puts that calmer sentence on the clipboard. If nothing matches, the panel says “Nothing in the checklist stood out. Read it yourself anyway.”

With a key, the review can use the model. If the model cannot be reached, the built-in checklist is shown instead.

To compare two versions, both files need to be on this project. Use **Compare with** and choose the other file. Then:

- **Text** is the agreement you opened
- **Changes** marks added words and strikes removed words
- **Side by side** shows **This version** and **Other version**

**Changes** and **Side by side** stay quiet until a second file is chosen. **All contracts** goes back to the list.

## Which code applies

**Code** is in the top bar, and again on the project. From the project it already knows which job you came from.

The page is titled **Which code applies**. Type a city or address in the field (the sample hint is “Watertown, WI”) and tap **Look up**. Or tap **Use my location** and allow the browser to share it. If the browser will not share a location, type the city and state.

The card names the city, county, and state. A badge says either **Checked against the state text** or **Summary — confirm locally**. Wisconsin is checked against the state text. Other states are a summary. Under the card are the adopted codes for that place, with links, and **Official copies** (the ICC, the municipal code host, and similar).

Edit a card when you know the local edition is different. Open **Settings**, section **Code list**, pick the **State**, change the lines, and tap **Save** followed by the state name. **Reset this state** and **Reset all states** put the built-in cards back.

**Ask about this code** is the question box. The hint is “How many exits does a room like this need?” Tap **Ask**. With a key, the question goes to the model. Without a key, you get a short answer drawn from the card on the screen. The amber note says to check it with the building official. Code & Contract is a desk reference, not a code determination.

### Quick code worksheet

The same page has **Quick code worksheet**. “A sketch of allowable area, occupant load, egress width, and fixture counts.”

- **Occupancy**, **Construction type**, **Stories**, **Building area, sf**, **Height, feet**
- **Sprinklers**: **Not sprinklered** or **NFPA 13 throughout**
- **Open perimeter, %** and **Smallest open width, ft**
- The checkbox **Use the reduced egress widths (sprinklered building with emergency voice alarm)**
- **Table edition for the frontage increase**: 2015, 2018, 2021, or 2024

**Height and area** reports whether the story count, height, and area sit inside the table.

**Occupant load**: type a space name and its area, and pick the load factor. **Add a space** and **Remove** edit the list. Toilet rooms are not added on top of the room they serve. The page then gives occupant load, other egress width, stair width, and the exit count from the occupant-load table.

**Plumbing fixtures**: **Use for the fixture count** and **Occupants for fixtures**. The counts are an IPC-style sketch. In Wisconsin, count fixtures from SPS 382, not from this sketch.

**Download worksheet** saves a PDF named \`code-worksheet.pdf\`.

## Energy

On the project, open **Energy**.

Two buttons: **Commercial** and **Residential**. Commercial is the IECC commercial envelope, or ASHRAE 90.1. Residential is the IECC house envelope.

**Code** is the edition.

- Commercial: IECC 2015, IECC 2018, IECC 2021, IECC 2024, ASHRAE 90.1-2016, ASHRAE 90.1-2019, ASHRAE 90.1-2022
- Residential: IECC 2015, 2018, 2021, and 2024

**Occupancy**

- IECC commercial: **All other** or **Group R**
- ASHRAE: **Nonresidential**, **Residential**, or **Semiheated**
- On the house check the same control is there; use it only if you are on **Commercial**

**Climate zone override** starts at **Use the county**. The line under the menus says which zone it is using, and, for Wisconsin, whether the 2015/2018 map and the 2021/2024 map disagree. Watertown and Brookfield are zone 6A on the older maps and zone 5A on the 2021 and 2024 maps. Pick a zone in the override when you want to force one.

On **Commercial**, the checkbox reads: “Daylight-responsive controls are specified. Under the IECC the window limit is 40 percent instead of 30, and skylights may be 6 percent of the roof instead of 3. Under ASHRAE 90.1 the window limit stays at 40 percent, and the skylight limit rises to 6 percent.” Leave it off unless those controls are actually on the drawings. When glass is over the limit, the trade-off gets tighter: the extra glass is not given the full window allowance.

On **Residential**, the checkbox reads: “Attic insulation covers the full ceiling and extends over the top plate, so the attic allowance in the R-value table applies.” Check it only when the insulation really does that. In the 2021 code the allowance is what lets R-49 stand in for an R-60 ceiling. In the 2024 code the ceiling table itself is R-49 in climate zone 6, and the allowance is R-38.

Each assembly is a card. The name is editable. **Assumed** means the number was filled in for you and should be checked. Fields you will see, depending on the assembly:

- **Area, sf**
- **Perimeter, ft** on a slab
- **Cavity R** and **Continuous R**
- **U, C, or F**
- **SHGC** and **Orientation** on windows and skylights

**Remove** deletes that card. **Add a component** lists the assembly types (roofs, walls, floors, slab, heated slab, doors, fixed window, operable window, entrance door, nonmetal-framed window, skylight, and the house list of ceiling, wall, floor, basement, crawl space, slab, window, skylight, and door). Tap **Add**.

**Prescriptive check** is one line per assembly: what you proposed, what the code table asks, and whether that piece meets the R-value table, the U-factor table, both, or neither. **NR** means the table requires no insulation for that piece. A door that has no R column is judged on U only. Liner systems show as LS. Filled-cavity metal roofs show as FC. Slab lines include the depth in inches.

**UA trade-off** adds U times area, C times below-grade area, and F times slab perimeter. It prints the proposed total, the code total, and either “Passes, … percent better than the code total” or “Fails, … percent worse than the code total.” If windows or skylights are over the limit, a second sentence explains the extra penalty. A blank U is estimated from the R-values so you can see the math. Type a tested U before you rely on it.

**Mandatory items** is the air-barrier and vestibule list (commercial) or the air-sealing, blower-door, recessed-light, and fireplace list (residential). Check the ones that are on the drawings.

**Prepared by** is the name on the summary. **Download summary** saves a PDF named with the project, for example \`River Crossing Clubhouse-energy.pdf\`. It has the project, the code, the climate zone, the component table, the UA result, the mandatory list, a signature line, and the links to COMcheck and REScheck.

The amber note under the button says: “This is a desk summary, not a permit submittal. Official submissions typically use the Department of Energy COMcheck or REScheck reports.” The links are **COMcheck** ([https://www.energycodes.gov/comcheck](https://www.energycodes.gov/comcheck)) and **REScheck** ([https://www.energycodes.gov/rescheck](https://www.energycodes.gov/rescheck)). Use those programs when the building official expects their report.

## The clubhouse sample

The first time you open Code & Contract, **River Crossing Clubhouse** is already on the list. Address: Watertown, WI. It is the Klett Architecture progress set: sheet A1.0, the floor plan, and sheet A4.0, the exterior elevations.

The plan has a scale set from the 63-foot overall. A cloud, an arrow, and a comment sit on the toilet rooms as a sample of the markup tools. The contracts folder has two versions of a sample owner-architect agreement, so **Compare with** has something to show.

**Energy** opens on a commercial check for IECC 2021. The climate line explains Jefferson County (Watertown sits in Jefferson and Dodge; both are the same zone): 6A on the 2015 and 2018 maps, 5A on the 2021 and 2024 maps. The assemblies are marked **Assumed**: an attic roof, wood walls with board and batten or lap siding, the large rear glazing, four swinging doors, and a slab. Edit every number before you treat it as the building. With those assumptions the window-to-wall ratio is under 30 percent, and the UA trade-off fails by a little over 1 percent, because the entered U and F are a bit worse than the code factors.

**Residential** on that same project is a sample house, not the clubhouse. The notes on the cards say so.

If you removed the sample, open **Settings** and tap **Restore the sample clubhouse**.

## Tips

- Set the scale before you measure. One known dimension is enough.
- Resolve comments as you clear them, so **open** stays the working list.
- Put both agreement versions on the project before you compare them.
- Type the city and state on the project before you open **Energy**, so the climate zone can be read from the county.
- On a commercial job that is not housing, leave **Occupancy** at **All other** (or **Nonresidential** if the code is ASHRAE).
- Turn on the daylight-controls checkbox only when the drawings show those controls.
- Export a backup at the end of a review day. The zip is the copy that can move to another iPad.

## Limits worth remembering

- This is one browser on one device. It is not a shared office server.
- The model key is never in the backup. Paste it again on a new device.
- A model can misread a sheet or an agreement. Accept only what you can see on the page.
- The code cards were compiled in November 2026. Wisconsin follows the state text (SPS 361–366 for commercial work, the Uniform Dwelling Code for one- and two-family houses). Other states are a summary. The building official decides.
- The worksheet is a sketch of the model-code tables. It is not a full height-and-area analysis, and the fixture counts are not the Wisconsin plumbing code.
- The energy summary is not a Department of Energy COMcheck or REScheck report. Permit sets that ask for those still need the official report.
- ASHRAE 90.1-2016, 2019, and 2022 share one insulation column here, because the opaque U-factors match. The 2016 window numbers are separate. The ASHRAE trade-off is the glass-area cap, not the full energy-cost model in the standard’s appendix.
- IECC 2015 and 2018 have no climate zone 0. If you pick zone 0, the desk shows the zone 1 row.
- Areas and U-factors marked **Assumed** are not a takeoff and not a tested assembly.
`;function s(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}function c(e){let t=[],n=e.replace(/\r\n/g,`
`).split(`
`),r=0;for(;r<n.length;){let e=n[r]??``;if(!e.trim()){r+=1;continue}if(e.startsWith(`### `)){let n=e.slice(4).trim();t.push({kind:`h3`,id:s(n),inlines:u(n)}),r+=1;continue}if(e.startsWith(`## `)){let n=e.slice(3).trim();t.push({kind:`h2`,id:s(n),inlines:u(n)}),r+=1;continue}if(e.startsWith(`# `)){let n=e.slice(2).trim();t.push({kind:`h1`,id:s(n),inlines:u(n)}),r+=1;continue}if(e.startsWith(`- `)){let e=[];for(;r<n.length&&(n[r]??``).startsWith(`- `);)e.push(u((n[r]??``).slice(2).trim())),r+=1;t.push({kind:`ul`,items:e});continue}if(/^\d+\. /.test(e)){let e=[];for(;r<n.length&&/^\d+\. /.test(n[r]??``);)e.push(u((n[r]??``).replace(/^\d+\. /,``).trim())),r+=1;t.push({kind:`ol`,items:e});continue}let i=[];for(;r<n.length&&(n[r]??``).trim()&&!/^(#|- |\d+\. )/.test(n[r]??``);)i.push((n[r]??``).trim()),r+=1;t.push({kind:`p`,inlines:u(i.join(` `))})}return t}function l(e){return(e??[]).map(e=>e.text).join(``)}function u(e){let t=[],n=/\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g,r=0;for(let i of e.matchAll(n)){let n=i.index??0;n>r&&t.push({text:e.slice(r,n)}),i[1]&&i[2]?t.push({text:i[1],href:i[2]}):i[3]?t.push({text:i[3],strong:!0}):i[4]&&t.push({text:i[4],code:!0}),r=n+i[0].length}return r<e.length&&t.push({text:e.slice(r)}),t}var d=i(),f=c(o),p=f.filter(e=>e.kind===`h2`||e.kind===`h3`);function m(){let{hash:e}=t(),n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=n.current;if(!t)return;if(!e){t.scrollTo(0,0);return}let r=decodeURIComponent(e.slice(1)),i=document.getElementById(r);if(!i)return;let a=i.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop;t.scrollTo({top:Math.max(0,a-8)})},[e]),(0,d.jsx)(`div`,{ref:n,className:`h-full overflow-auto`,children:(0,d.jsxs)(`div`,{className:`mx-auto grid max-w-5xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)]`,children:[(0,d.jsxs)(`nav`,{"aria-label":`On this page`,className:`lg:sticky lg:top-6 lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-auto`,children:[(0,d.jsx)(`p`,{className:`font-semibold`,children:`On this page`}),(0,d.jsx)(`ul`,{className:`mt-3 space-y-1`,children:p.map(e=>(0,d.jsx)(`li`,{className:e.kind===`h3`?`pl-3`:``,children:(0,d.jsx)(`a`,{className:`inline-block rounded-md py-1 text-sm font-semibold text-primary underline-offset-2 hover:underline`,href:`#${e.id}`,children:l(e.inlines)})},e.id))}),(0,d.jsx)(`a`,{className:`mt-4 inline-block text-sm font-semibold underline`,href:`/plan-desk/code-and-contract-user-guide.pdf`,download:!0,children:`Download guide (PDF)`})]}),(0,d.jsxs)(`article`,{className:`min-w-0 max-w-3xl`,children:[f.map((e,t)=>{if(e.kind===`h1`)return(0,d.jsx)(`header`,{id:e.id,className:`scroll-mt-6`,children:(0,d.jsx)(`h1`,{className:`font-serif text-4xl`,children:l(e.inlines)})},t);if(e.kind===`h2`)return(0,d.jsx)(`h2`,{id:e.id,className:`mt-10 scroll-mt-6 font-serif text-3xl`,children:l(e.inlines)},t);if(e.kind===`h3`)return(0,d.jsx)(`h3`,{id:e.id,className:`mt-8 scroll-mt-6 font-serif text-2xl`,children:l(e.inlines)},t);if(e.kind===`ul`||e.kind===`ol`){let n=e.kind===`ul`?`ul`:`ol`;return(0,d.jsx)(n,{className:`mt-3 space-y-2 pl-6 text-[17px] leading-relaxed ${e.kind===`ul`?`list-disc`:`list-decimal`}`,children:e.items?.map((e,t)=>(0,d.jsx)(`li`,{children:(0,d.jsx)(h,{text:e})},t))},t)}return(0,d.jsx)(`p`,{className:`mt-3 text-[17px] leading-relaxed`,children:(0,d.jsx)(h,{text:e.inlines??[]})},t)}),(0,d.jsx)(`p`,{className:`mt-10`,children:(0,d.jsx)(r,{className:`font-semibold underline`,to:`/`,children:`Back to projects`})})]})]})})}function h({text:e}){return e.map((e,t)=>{if(e.href){let n=e.href.startsWith(`http`);return(0,d.jsx)(`a`,{className:`font-semibold underline`,href:e.href,...n?{target:`_blank`,rel:`noreferrer`}:{},children:e.text},t)}return e.strong?(0,d.jsx)(`strong`,{children:e.text},t):e.code?(0,d.jsx)(`code`,{className:`rounded bg-muted px-1`,children:e.text},t):(0,d.jsx)(`span`,{children:e.text},t)})}export{m as HelpPage};