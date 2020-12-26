﻿NDContentPage.OnToolTipsLoaded({27:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype27\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_tlm_send_transport(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">socket,</td></tr><tr><td class=\"PModifierQualifier first\">tlm::</td><td class=\"PType\">tlm_generic_payload&amp;&nbsp;</td><td class=\"PName last\">trans,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_tlm_generic_payload_header&amp;&nbsp;</td><td class=\"PName last\">csgp,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">sc_time&amp;&nbsp;</td><td class=\"PName last\">delay,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">tlm_phase_enum &amp;&nbsp;</td><td class=\"PName last\">phase</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send tlm generic payload&nbsp; packet ( cs_tlm_generic_payload_header&nbsp; + byte data vector + byte_enable vector )</div></div>",28:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_tlm_recv_transport(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">socket,</td></tr><tr><td class=\"PModifierQualifier first\">tlm::</td><td class=\"PType\">tlm_generic_payload&amp;&nbsp;</td><td class=\"PName last\">trans,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_tlm_generic_payload_header&amp;&nbsp;</td><td class=\"PName last\">csgp</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">receive tlm generic payload&nbsp; packet ( cs_tlm_generic_payload_header&nbsp; + byte data vector + byte_enable vector )</div></div>",37:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype37\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_send_nb_transport(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">socket,</td></tr><tr><td class=\"PModifierQualifier first\">tlm::</td><td class=\"PType\">tlm_generic_payload&amp;&nbsp;</td><td></td><td class=\"PName last\">trans,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">tlm_phase&nbsp;</td><td class=\"PSymbols\">&amp;</td><td class=\"PName last\">phase,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">sc_time&amp;&nbsp;</td><td></td><td class=\"PName last\">delay</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">TLM nb_transport_fw/nb_transport_bw analogy&nbsp; (source side).</div></div>",39:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype39\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_recv_nb_transport(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName\">socket,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">tlm::</td><td class=\"PType\">tlm_generic_payload&amp;&nbsp;</td><td></td><td class=\"PName\">trans,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">tlm_phase&nbsp;</td><td class=\"PSymbols\">&amp;</td><td class=\"PName\">phase,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">sc_time&amp;&nbsp;</td><td></td><td class=\"PName\">delay,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">sc_time_unit&nbsp;</td><td></td><td class=\"PName\">sc_time_units</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\">SC_PS</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">TLM nb_transport_fw/nb_transport_bw analogy (receiver side)</div></div>",256:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype256\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">unsigned int</span> shunt_prim_init_initiator(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">portno</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">TCP/IP initiator initialization</div></div>",259:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype259\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">unsigned int</span> shunt_prim_init_target(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">portno,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">hostname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">TCP/IP target initialization</div></div>",324:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\"><b>TLM 2.0 Generic Payload structure</b> (Ref. to TLM 2.0 Generic Payload attributes)</div></div>",326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype326\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_send_gp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">byte_enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send tlm generic payload&nbsp; packet ( cs_tlm_generic_payload_header&nbsp; + byte data vector + byte_enable vector )</div></div>",327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype327\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_recv_gp_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">recieve tlm generic payload&nbsp; header ( cs_tlm_generic_payload_header only)</div></div>",329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype329\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_recv_gp_data (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">long</span>*&nbsp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">long</span>*&nbsp;</td><td class=\"PName last\">byte_enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">recieve tlm generic payload&nbsp; packet (byte data vector + byte_enable vector )</div></div>"});