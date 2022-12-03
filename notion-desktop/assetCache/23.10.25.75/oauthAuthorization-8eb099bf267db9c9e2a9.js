"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[370],{41491:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ae});var o=i(77094),n=i.n(o),r=i(77422),a=i.n(r),s=(i(33948),i(85827),i(15306),i(67294)),d=i.n(s),l=i(83355),c=i(24405),g=i(15070),u=i(8848),h=i(3779),p=i(56589),m=i(82036),v=i(4615),S=i(89101),f=i(77420),y=i(9844),w=i(9852),b=i(90965),k=i(97880),A=i(82990),M=i(5366),x=i(92625),P=i(36110),I=i(26111),C=i(29974),z=i(21325),B=i(38755),Z=i(1643),_=i(27832),T=i(49065),N=i(62213),F=i(78291),L=i(12318),E=i(72693),U=i(11106),W=i(42402),V=i(68932),R=i(97464),D=i.n(R),O=i(53522),j=i(37871),H=i(45094),Y=i(81236),q=i(17364),G=i(83071),K=i(1101),J=i(98285),Q=i(34011),X=i(31280);class $ extends X.g6{renderAccountHeader(e){const t=q.Z.getUserEmailAddress(this.environment,e);return t&&n()(K.Z,{emailAddress:t,userId:e,disabled:!1,accountActions:[(0,O.qu)(e)]})}renderFooter(){return n()("div",{style:this.getFooterStyle()},void 0,n()(G.Z,{},void 0,j.k(this.environment)&&d().createElement(J.Z,D()({createType:"add-account",disableLoginLink:this.props.disableLoginLink},this.stores))))}getMenuListSections(e){const{device:t}=this.environment;return[{key:"spaces",render:e=>d().createElement(G.Z,D()({},e,{disableMobilePadding:!0,topBorder:t.isMobile,style:{borderBottom:"1px solid ".concat(this.theme.regularDividerColor)}})),items:this.getSpaceMenuListItems(e)}]}getSpaceMenuListItems(e){const{onSpaceClick:t}=this.props,i=[],{currentUserRootStore:o,currentSpaceStore:r}=_.default.state,a=q.Z.getSpaceViewStores(this.environment,e);if(!o||!r)return[];a.sort(((e,t)=>{var i,o;const n=Number(Boolean(null===(i=e.getSpaceStore())||void 0===i?void 0:i.canAdmin()));return Number(Boolean(null===(o=t.getSpaceStore())||void 0===o?void 0:o.canAdmin()))-n}));for(const s of a){const a=s.getSpaceStore();if(a){const l=e===o.id&&a.id===r.id,c=(0,B.getSpaceName)(this.environment,a),g=(0,B.isGuestOfSpace)(a);let u;const h=Y.Z.getPublicSpaceData(this.environment,a.id);if(h){const e=h.productId?this.props.intl.formatMessage((0,H.em)(h.productId)):this.props.intl.formatMessage("team"===a.getPlanType()?H.js.teamTrialPlan:H.js.personalPlan);u=this.props.intl.formatMessage("personal"===a.getPlanType()?H.js.workspaceSubtitleWithoutMembers:H.js.workspaceSubtitleWithMembers,{numberOfWorkspaceMembers:this.props.intl.formatNumber(h.memberCount),planType:e})}i.push({key:s.id,render:e=>d().createElement(Q.Z,D()({},e,{id:s.id,icon:(0,B.getSpaceIcon)(this.environment,a),title:c,caption:u,isCheck:l,showDragHandle:!1,disabled:g,disableTooltip:!g,tooltipMessage:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.workspaceSwitcher.disabledWorkspace.tooltip",defaultMessage:"This integration can only be added by a member or admin."})})),action:async e=>{let{event:i}=e;this.close(),l||await t({event:i,spaceViewStore:s})}})}}return i}getUnreadCountForOtherSpaces(){return 0}}const ee=(0,M.injectIntl)($);var te=i(47966),ie=i(40039);const oe=(0,M.defineMessages)({loadingMessage:{id:"oauthAuthorization.loadingMessage",defaultMessage:"Authorizing…",description:"Loading modal shown when user is authorizing a Notion Integration from our OAuth screen."}});class ne extends l.Z{constructor(){super(...arguments),a()(this,"storeTypes",{authorizationStepStore:L.Z.of("permissions"),selectedBlockIdsStore:L.Z.of({}),existingBotStore:L.Z.of(void 0),isLoading:L.Z.of(!1)}),a()(this,"renderErrorOrAuthorizationPage",(()=>{const{responseType:e,integrationId:t}=this.props,{existingBotStore:i}=this.stores,{currentUserRootStore:o,currentSpaceStore:r,currentSpaceViewStore:a,currentUserSettingsStore:s}=_.default.state;if(!(o&&r&&a&&s))return;const d=(0,B.getSpaceName)(this.environment,r);if(!t||!(0,v.e)(t))return this.renderError({type:m._.invalid_request,body:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.invalidClientId.body",defaultMessage:"Missing or incomplete Client ID. See <inlinetextlink>developer docs</inlinetextlink> for more help.",values:{inlinetextlink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return n()(W.Z,{href:"https://developers.notion.com/#handling-errors"},void 0,t)}}}),integration:void 0});const l=(0,T.Kv)(o,{table:y.K2,id:t});return l.isReady()?l.state.value?"code"!==e?this.renderError({type:m._.invalid_request,body:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.invalidResponseType",defaultMessage:"Missing or invalid response_type. See <inlinetextlink>developer docs</inlinetextlink> for more help.",values:{inlinetextlink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return n()(W.Z,{href:"https://developers.notion.com/#handling-errors"},void 0,t)}},description:"Do not translate 'response_type', it's code."}),integration:l.state.value}):i.state&&i.state.created_by_id!==o.id?this.renderError({type:m._.access_denied,title:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.integrationAlreadyInstalled.title",defaultMessage:"This integration has already been added to {workspaceName}",values:{workspaceName:d}}),body:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.integrationAlreadyInstalled.body",defaultMessage:"You can review and remove added integrations in Settings."}),integration:l.state.value,primaryAction:n()(E.Z,{isLarge:!0,onClick:()=>{P.Hx({environment:this.environment,spaceViewStore:a,spaceStore:r,userSettingsStore:s,userRootStore:o})}},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.integrationAlreadyInstalled.openWorkspaceSettingsButton.label",defaultMessage:"Open Settings"}))}):this.renderAuthorizationPage(l.state.value):this.renderError({type:m._.invalid_request,body:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.clientNotFound.body",defaultMessage:"Missing or incomplete Client ID. See <inlinetextlink>developer docs</inlinetextlink> for more help.",values:{inlinetextlink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return n()(W.Z,{href:"https://developers.notion.com/#handling-errors"},void 0,t)}}}),integration:l.state.value}):n()(V.Z,{})})),a()(this,"initializeStores",(async()=>{const{selectedBlockIdsStore:e,existingBotStore:t}=this.stores,{currentUserRootStore:i,currentSpaceStore:o}=_.default.state;if(!i||!o)return;await z.bi(this.environment);const{data:n}=F.default.state;if(!n)return;const r=Z.NM(n),a=await this.getExistingBot(r.map((e=>e.botId)));if(!a)return t.reset(),void e.reset();t.setState(a);const s=r.find((e=>e.botId===a.id));s&&e.setState(s.pageIds.reduce(((e,t)=>(e[t]=!0,e)),{}))})),a()(this,"getExistingBot",(async e=>{const{integrationId:t}=this.props,{currentUserRootStore:i,currentSpaceStore:o}=_.default.state;if(!i||!o)return;return(await Promise.all(e.map((async e=>{const t=(0,T.Kv)(i,{table:f.cZ,id:e,spaceId:o.id});return await t.load(),t.getValue()})))).find((e=>e&&e.alive&&(0,g.oA)(e)&&e.parent_id===i.id&&e.integration_id===t))})),a()(this,"switchToPagePickerStep",(()=>{this.stores.authorizationStepStore.setState("page_picker")})),a()(this,"switchToPermissionsStep",(()=>{this.stores.authorizationStepStore.setState("permissions")})),a()(this,"handleSpaceSwitch",(async e=>{const{spaceViewStore:t}=e;await C.ce({environment:this.environment,spaceViewStore:t}),await this.initializeStores()})),a()(this,"handleCancel",(e=>{P.VW({environment:this.environment,params:this.props,integration:e,errorType:m._.access_denied})})),a()(this,"handleAuthorize",(async(e,t)=>{const{selectedBlockIdsStore:i,isLoading:o}=this.stores;o.set(!0),x.j({message:oe.loadingMessage}),await P.VW({environment:this.environment,params:this.props,integration:e,spaceId:t,blockIdsForBot:Object.keys(i.state).filter((e=>i.state[e]))}),x.x(),o.set(!1)})),a()(this,"handleClickPage",((e,t)=>{const{selectedBlockIdsStore:i}=this.stores;i.setState({...i.state,[e]:!t})})),a()(this,"handleClickSection",(e=>{const{selectedBlockIdsStore:t}=this.stores,i=e.every((e=>t.state[e.id]));t.setState({...t.state,...e.reduce(((e,t)=>(e[t.id]=!i,e)),{})})}))}willMount(){const{responseType:e,integrationId:t,redirectUri:i,state:o,owner:n}=this.props;w.setOauthAuthorizationParams({responseType:e,integrationId:t,redirectUri:i,state:o,owner:n})}async didMount(){const{currentSpaceStore:e,currentSpaceViewStore:t}=_.default.state;e&&t&&e.canAdmin()?await this.initializeStores():await this.setCurrentSpaceToFirstAdminSpace()}renderComponent(){const{currentSpaceStore:e}=_.default.state;if(e)return n()("div",{style:this.getLayoutContainerStyle()},void 0,n()("div",{style:this.getPageContainerStyle()},void 0,n()("div",{style:this.getContentBoxStyle()},void 0,this.renderTopbar(),n()("div",{style:this.getContentBodyStyle()},void 0,this.renderErrorOrAuthorizationPage()))))}renderAuthorizationPage(e){const{redirectUri:t}=this.props,{authorizationStepStore:i}=this.stores,{currentSpaceStore:o,currentSpaceViewStore:r}=_.default.state;if(!o||!r)return;const a=(0,B.getSpaceName)(this.environment,o);return!o.state.value||(0,B.isGuestOfSpace)(o)?this.renderError({type:m._.access_denied,title:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.notAnAdmin.title",defaultMessage:"You're not allowed to add integrations to {workspaceName}",values:{workspaceName:a}}),body:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.notAnAdmin.body",defaultMessage:"Contact an admin to grant you access, or switch to another workspace."}),integration:e,primaryAction:n()(E.Z,{isLarge:!0,onClick:()=>N.Z.setState({...N.Z.state,open:!0})},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.notAnAdmin.switchWorkspaceButton.label",defaultMessage:"Switch workspace"}))}):o.canAdmin()||this.isIntegrationAllowedByAdmin(e)?p._(e,t)?"permissions"===i.state?this.renderPermissionsStep(e,o):"page_picker"===i.state?this.renderPagePickerStep(e,o):(0,k.t1)(i.state):this.renderError({type:m._.invalid_request,body:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.invalidRedirectUri.body",defaultMessage:"Missing or invalid redirect_uri. See <inlinetextlink>developer docs</inlinetextlink> for more help.",values:{inlinetextlink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return n()(W.Z,{href:"https://developers.notion.com/#handling-errors"},void 0,t)}},description:"Do not translate 'redirect_uri', it's code."}),integration:e}):this.renderError({type:m._.access_denied,title:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.integrationNotApproved.title",defaultMessage:'You are not permitted to add the integration "{integrationName}" to {workspaceName}',values:{integrationName:e.name,workspaceName:a}}),body:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.integrationNotApproved.body",defaultMessage:"Contact your system administrator for more information."}),integration:e,primaryAction:n()(E.Z,{isLarge:!0,onClick:()=>N.Z.setState({...N.Z.state,open:!0})},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.notAnAdmin.switchWorkspaceButton.label",defaultMessage:"Switch workspace"}))})}renderPermissionsStep(e,t){var i,o,r,a,s,l,c,g=this;const u=(0,B.getSpaceName)(this.environment,t),p=e.info.website_url,m=e.info.terms_of_use_url,v=e.info.privacy_policy_url,S=e.info.icon?{pointer:{table:y.K2,id:e.id},icon:e.info.icon}:void 0,f=this.props.redirectUri?this.props.redirectUri.replace("http://","").replace("https://","").split(/[/?#]/)[0]:void 0;return d().createElement(d().Fragment,null,n()("div",{style:{padding:15}},void 0,n()(ie.Z,{icon:S,disabled:!0,title:e.name,size:54,isEmptyPage:!1,style:{margin:"auto"}})),n()("div",{style:this.getTitleStyle()},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.title",defaultMessage:"<inlinetextlink>{integrationName}</inlinetextlink> wants to access {workspaceName}",values:{integrationName:e.name,workspaceName:u,inlinetextlink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return p?n()(W.Z,{style:{...g.getInlineTextLinkStyle(),fontWeight:A.Z.fontWeight.semibold},href:p},void 0,t):t}}})),n()("div",{style:{marginBottom:8}},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.intro",defaultMessage:"<inlinetextlink>{integrationName}</inlinetextlink> wants to",values:{integrationName:e.name,inlinetextlink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return p?n()(W.Z,{href:p,style:g.getInlineTextLinkStyle()},void 0,t):t}}})),(null===(i=e.capabilities)||void 0===i?void 0:i.read_content)&&n()(re,{icon:h.Z.eye,title:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.readContent",defaultMessage:"View pages you select",description:"This is one of the things an integration can do once it's added to a user's workspace."})},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.readContent.description",defaultMessage:'"{integrationName}" will be able to view pages you select in the next step. You can also share pages later with "{integrationName}" via the Share menu.',values:{integrationName:e.name,workspaceName:u}})),(null===(o=e.capabilities)||void 0===o?void 0:o.update_content)&&n()(re,{icon:h.Z.pencil,title:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.updateContent",defaultMessage:"Edit pages you select",description:"This is one of the things an integration can do once it's added to a user's workspace."})},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.updateContent.description",defaultMessage:'"{integrationName}" will be able to edit pages you select in the next step. You can also share pages later with "{integrationName}" via the Share menu.',values:{integrationName:e.name,workspaceName:u}})),(null===(r=e.capabilities)||void 0===r?void 0:r.insert_content)&&n()(re,{icon:h.Z.plus,title:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.insertContent",defaultMessage:"Create new content within pages you select",description:"This is one of the things an integration can do once it's added to a user's workspace."})},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.insertContent.description",defaultMessage:'"{integrationName}" will be able to add new content or sub-pages to pages you select in the next step. You can also share pages later with "{integrationName}" via the Share menu.',values:{integrationName:e.name,workspaceName:u}})),((null===(a=e.capabilities)||void 0===a?void 0:a.read_user_without_email)||(null===(s=e.capabilities)||void 0===s?void 0:s.read_user_with_email))&&n()(re,{icon:h.Z.settingsMembers,title:null!==(l=e.capabilities)&&void 0!==l&&l.read_user_with_email?n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.viewUsersAndEmail",defaultMessage:"View workspace users and their emails",description:"This is one of the things an integration can do once it's added to a user's workspace."}):n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers",defaultMessage:"View workspace users",description:"This is one of the things an integration can do once it's added to a user's workspace."})},void 0,null!==(c=e.capabilities)&&void 0!==c&&c.read_user_with_email?n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.viewUsersAndEmail.detail",defaultMessage:'"{integrationName}" will be able to see basic information about all workspace members and guest data, including their names, profile images, and email addresses.',values:{integrationName:e.name}}):n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers.detail",defaultMessage:'"{integrationName}" will be able to see basic information about all workspace members and guests, like their names and profile images, but not their email addresses.',values:{integrationName:e.name}})),this.renderOptionButtons({leftText:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.cancelButton.label",defaultMessage:"Cancel"}),leftAction:()=>this.handleCancel(e),rightText:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.continueButton.label",defaultMessage:"Select pages",description:"This button will take a user to a screen where they can choose pages to share with an integration."}),rightAction:this.switchToPagePickerStep}),n()("div",{style:{display:"flex",alignItems:"center",marginTop:20}},void 0,t.canAdmin()&&!this.isIntegrationAllowedByAdmin(e)&&n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.integrationApprovalNotice",defaultMessage:"Authorizing this integration will add it to your workspace's approval list. Other workspace members will be able to install this integration."})),n()("footer",{style:this.getFooterStyle()},void 0,n()("div",{style:{color:this.theme.regularTextColor,fontWeight:A.Z.fontWeight.semibold,marginBottom:4}},void 0," ",n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.warning.title",defaultMessage:'Make sure you trust "{integrationName}" ({redirectUriDomain})',values:{integrationName:e.name,redirectUriDomain:f}})),n()("div",{},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.warning.body",defaultMessage:'If you continue, you may be sharing sensitive information. Notion does not review third party integrations such as "{integrationName}". Learn how "{integrationName}" handles your data by reviewing their <privacypolicylink>Privacy Policy</privacypolicylink> and <termsofservicelink>Terms of Service</termsofservicelink>.',values:{integrationName:e.name,privacypolicylink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return v?n()(W.Z,{href:v},void 0,t):t},termsofservicelink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return m?n()(W.Z,{href:m},void 0,t):t}}}))))}renderPagePickerStep(e,t){return d().createElement(d().Fragment,null,n()("div",{style:this.getSubtitleStyle()},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.title",defaultMessage:'Allow "{integrationName}" to access these pages',values:{integrationName:e.name}})),n()(U.Z,{onClickPage:this.handleClickPage,onClickSection:this.handleClickSection,selectedBlockIdsStore:this.stores.selectedBlockIdsStore}),this.renderOptionButtons({leftText:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.backButton.label",defaultMessage:"Back"}),leftAction:this.switchToPermissionsStep,rightText:n()(M.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.finishButton.label",defaultMessage:"Allow access",description:"This button, once clicked, adds an integration to a user's workspace and automatically gives it access to a set of pages the user selected."}),rightAction:()=>this.handleAuthorize(e,t.id)}))}renderTopbar(){const{isMobile:e}=this.environment.device;return n()("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:60,paddingLeft:20,paddingRight:8,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:u.ZP.contentBorder}},void 0,h.Z.notionLogoStroked({width:e?28:30,height:e?28:30,marginRight:10,flexShrink:0}),n()("div",{style:{fontWeight:A.Z.fontWeight.medium,fontSize:16}},void 0,"Notion"),n()("div",{style:{flexGrow:1,flexShrink:1}}),n()("div",{style:{flexShrink:0}},void 0,n()(ee,{format:X._S.Regular,onSpaceClick:e=>{let{spaceViewStore:t}=e;return this.handleSpaceSwitch({spaceViewStore:t})},shouldShowUnexpandButton:!1,disableLoginLink:!0,buttonStyle:{borderRadius:3,marginBottom:0}})))}renderOptionButtons(e){return n()("div",{style:this.getButtonGroupStyle()},void 0,n()(te.Z,{isLarge:!0,onClick:e.leftAction,style:{height:32}},void 0,e.leftText),n()(E.Z,{isLarge:!0,onClick:e.rightAction,disabled:this.stores.isLoading.get()},void 0,e.rightText))}renderError(e){let{integration:t,type:i,title:o,body:r,primaryAction:a}=e;const s=o||n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.genericError.title",defaultMessage:"Something went wrong"});return n()("section",{style:this.getErrorContainerStyle()},void 0,h.Z.genericError(this.getErrorIconStyle()),n()("header",{style:{...this.getTitleStyle(),marginBottom:12}},void 0,s),r&&n()("p",{style:this.getErrorBodyStyle()},void 0,r),a&&n()("div",{style:this.getErrorBodyStyle()},void 0,a),n()(te.Z,{onClick:()=>{P.VW({environment:this.environment,integration:t,errorType:i,params:this.props})}},void 0,n()(M.FormattedMessage,{id:"oauthAuthorizationPage.error.cancelButton.label",defaultMessage:"Cancel"})))}isIntegrationAllowedByAdmin(e){const{currentSpaceStore:t}=_.default.state;if(!t||!t.state.value)return!1;const i=t.state.value.bot_settings;if(!i)return!0;if((0,b.CJ)(i)){const t=i.integration_approval_statuses;return!(!t||!t[e.id])&&Boolean("approved"===t[e.id].status)}return!0}async setCurrentSpaceToFirstAdminSpace(){const{currentUserRootStore:e}=_.default.state;if(e){const t=e.getSpaceViewStores();if(t.length>0){const e=t.find((e=>e.canAdmin()));return void(await this.handleSpaceSwitch({spaceViewStore:e||t[0]}))}}I.navigate({environment:this.environment,url:S._j.login,redirect:!0})}getLayoutContainerStyle(){const{WindowSizeStore:e}=this.environment;return{height:"100%",overflow:"auto",backgroundColor:e.state.width>500?u.ZP.frontCreamBackground:u.ZP.white}}getPageContainerStyle(){return{display:"flex",justifyContent:"center"}}getContentBoxStyle(){const{WindowSizeStore:e}=this.environment,t=e.state.width>500,i=e.state.height<600?16:t?"calc((100vh - 600px) / 2)":0,o=t?this.theme.lightBoxShadow:"none";return{width:"500px",minHeight:"600px",borderRadius:5,backgroundColor:u.ZP.white,boxShadow:o,display:"flex",flexDirection:"column",fontSize:A.Z.fontSize.UIRegular.desktop,marginTop:i,transition:"all 0.2s ease"}}getContentBodyStyle(){return{paddingLeft:40,paddingRight:40,paddingTop:25,paddingBottom:25,flex:1,display:"flex",flexDirection:"column"}}getFooterStyle(){return{fontSize:A.Z.fontSize.UISmall.desktop,color:this.theme.mediumTextColor,paddingTop:32,paddingBottom:16}}getTitleStyle(){const{device:e}=this.environment;return{fontSize:e.isMobile?18:20,margin:"0 50px 32px",textAlign:"center",fontWeight:A.Z.fontWeight.medium}}getSubtitleStyle(){return{fontSize:14,textAlign:"center",fontWeight:A.Z.fontWeight.medium,marginBottom:16}}getButtonGroupStyle(){return{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:24}}getErrorContainerStyle(){return{textAlign:"center",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}getErrorIconStyle(){const{device:e}=this.environment,t=e.isMobile?25:48;return{fill:u.ZP.red,width:t,height:t,marginBottom:20,display:"inline-block"}}getErrorBodyStyle(){return{marginTop:0,marginBottom:24,width:"80%"}}getInlineTextLinkStyle(){return{borderBottom:"1px solid rgba(54, 53, 47, 0.2)",color:"black",textDecoration:"none"}}}function re(e){const[t,i]=(0,s.useState)(!1),o=(0,c.y)((e=>({permissionItem:{display:"flex",justifyContent:"space-between",padding:"6px 0",cursor:"pointer",userSelect:"none"},permissionItemHeading:{display:"flex",alignItems:"center"},permissionItemDetails:{paddingLeft:32,transition:"all 0.2s ease",color:e.mediumTextColor},rightStyle:{width:22,height:18},sharedIconStyle:{width:24,height:16,textAlign:"center",marginRight:8}})),[]);return d().createElement(d().Fragment,null,n()("div",{style:o.permissionItem,onClick:()=>i(!t)},void 0,n()("div",{style:o.permissionItemHeading},void 0,n()("div",{style:o.sharedIconStyle},void 0,e.icon({width:16,height:16,color:u.ZP.regularIconColor})),n()("div",{},void 0,e.title)),e.children&&n()("div",{},void 0,h.Z.chevronDownThin({width:12,height:12,color:u.ZP.lightIconColor,transform:t?"rotate(180deg)":void 0,transition:"transform 0.2s ease"}))),n()("div",{style:{...o.permissionItemDetails,opacity:t?1:0,flex:t?1:0,paddingBottom:t?8:0,transform:t?"translate3d(0,-4px,0)":"translate3d(0,-8px,0)"}},void 0,t&&e.children))}const ae=(0,M.injectIntl)(ne)}}]);