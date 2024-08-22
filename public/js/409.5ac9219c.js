"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[409],{246:(__unused_webpack_module,__webpack_exports__)=>{__webpack_exports__.Z={props:{content:{type:Object,required:!0}},emits:["update:sidepanel-content","update:content:effect","trigger-event"],data(){return{designName:wwLib.wwWebsiteData.getWebsiteName(),state:"normal",remountKey:0,designId:wwLib.wwWebsiteData.getInfo().id,apiUrl:wwLib.wwApiRequests._getApiUrl()}},computed:{isEditing(){return!1},isSelected(){return!1},formState(){return this.state}},methods:{setState(e){this.state=e},getComputedData(e){switch(this.content.submitAction){case"weweb-email":return{designName:this.designName,recipients:this.content.wewebEmail.recipients,...e};case"airtable":return{records:[{fields:e}]};default:return e}},async submit(e){try{if("success"===this.formState||"loading"===this.formState)return;"none"!==this.content.submitAction&&this.setState("loading");const t={};for(const a of e.srcElement.elements){if("INPUT"===a.nodeName||"TEXTAREA"===a.nodeName||"SELECT"===a.nodeName)switch(a.type){case"number":t[a.name]=parseFloat(a.value);break;case"date":t[a.name]=new Date(a.value).toUTCString();break;case"checkbox":t[a.name]="on"===a.value;break;case"radio":t[a.name]=a.checked?a.value:t[a.name];break;default:t[a.name]=a.value;break}if(a.classList.contains("g-recaptcha-response")&&""===wwLib.getFrontWindow().grecaptcha.getResponse()){const e=wwLib.getFrontDocument().createElement("p");throw e.innerHTML="Invalid reCAPTCHA. Please try again",e.style.color="#ff0000",e.style.fontSize="12px",a.parentNode.appendChild(e),setTimeout((()=>{a.parentNode.removeChild(e)}),8e3),new Error}}for(const e of this.content.queries){const n=this.$route.query[e];n&&(t[e]=n)}const n=this.content.headers.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),o={...this.content.data.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),...this.getComputedData(t)};"none"!==this.content.submitAction&&await axios({method:this.content.method,url:"weweb-email"===this.content.submitAction?`${this.apiUrl}/design/${this.designId}/form/email`:this.content.url,data:o,headers:n}),this.$emit("trigger-event",{name:"submit",event:{formData:o}}),this.afterSubmitAction(),"none"!==this.content.submitAction&&this.setState("success")}catch(t){this.setState("error"),this.$emit("trigger-event",{name:"submit-error",event:{formError:t}}),this.afterErrorAction(),wwLib.wwLog.error(t)}},async afterSubmitAction(){switch(this.content.afterSubmitAction.type){case"link":return this.$refs.link.$el.click();case"custom-script":return eval(this.content.afterSubmitAction.customScript.code)}},async afterErrorAction(){switch(this.content.afterErrorAction.type){case"link":return this.$refs.link.$el.click();case"custom-script":return eval(this.content.afterErrorAction.customScript.code)}}}}},9953:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(6252),a=n(3577),c=n(9963);const r=["name","autocomplete"],s={class:"ww-form-container__relative"};function i(e,t,n,i,m,d){const u=(0,o.up)("wwLink"),w=(0,o.up)("wwLayout");return(0,o.wg)(),(0,o.iD)("form",{name:n.content.name,autocomplete:n.content.autocomplete?"on":"off",class:(0,a.C_)(["ww-form-container",[d.formState,{editing:d.isEditing,selected:d.isSelected}]]),"data-ww-flag":"form-container",onSubmit:t[0]||(t[0]=(0,c.iM)(((...e)=>d.submit&&d.submit(...e)),["prevent"]))},[(0,o.wy)((0,o.Wm)(u,{ref:"link","ww-link":n.content.afterSubmitAction.link},null,8,["ww-link"]),[[c.F8,!1]]),(0,o._)("div",s,[(0,o.Wm)(w,{class:(0,a.C_)([{hidden:"success"===d.formState},"ww-form-container__content -normal"]),path:"content"},null,8,["class"]),(0,o.Wm)(w,{class:(0,a.C_)([{hidden:"success"!==d.formState},"ww-form-container__content -success"]),path:"successContent"},null,8,["class"]),"error"===d.formState?((0,o.wg)(),(0,o.j4)(w,{key:0,class:"ww-form-container__content -error",path:"errorContent"})):(0,o.kq)("",!0)])],42,r)}var m=n(246),d=n(3744);const u=(0,d.Z)(m.Z,[["render",i],["__scopeId","data-v-1aa1e500"]]);var w=u},8474:(e,t,n)=>{n.r(t);var o=n(7470),a=n(7384),c=n(259),r=n(8749),s=n(9953),i=n(1841),m=n(3914),d=n(5022),u=n(5883),w=n(5710);o.Z.component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",a.Z),o.Z.component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",c.Z),o.Z.component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",r.Z),o.Z.component("wwobject-25edb26f-a365-4447-8de5-4964f9f7dc77",s.Z),o.Z.component("wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba",i.Z),o.Z.component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",m.Z),o.Z.component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",d.Z),o.Z.component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",u.Z),o.Z.component("section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d",w.Z)}}]);