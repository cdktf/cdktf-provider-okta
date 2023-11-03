# `okta_idp_saml`

Refer to the Terraform Registory for docs: [`okta_idp_saml`](https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml).

# `idpSaml` Submodule <a name="`idpSaml` Submodule" id="@cdktf/provider-okta.idpSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSaml <a name="IdpSaml" id="@cdktf/provider-okta.idpSaml.IdpSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml okta_idp_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_saml.IdpSaml;

IdpSaml.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .issuer(java.lang.String)
    .kid(java.lang.String)
    .name(java.lang.String)
    .ssoUrl(java.lang.String)
//  .accountLinkAction(java.lang.String)
//  .accountLinkGroupInclude(java.util.List<java.lang.String>)
//  .acsType(java.lang.String)
//  .deprovisionedAction(java.lang.String)
//  .groupsAction(java.lang.String)
//  .groupsAssignment(java.util.List<java.lang.String>)
//  .groupsAttribute(java.lang.String)
//  .groupsFilter(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .issuerMode(java.lang.String)
//  .maxClockSkew(java.lang.Number)
//  .nameFormat(java.lang.String)
//  .profileMaster(java.lang.Boolean)
//  .profileMaster(IResolvable)
//  .provisioningAction(java.lang.String)
//  .requestSignatureAlgorithm(java.lang.String)
//  .requestSignatureScope(java.lang.String)
//  .responseSignatureAlgorithm(java.lang.String)
//  .responseSignatureScope(java.lang.String)
//  .ssoBinding(java.lang.String)
//  .ssoDestination(java.lang.String)
//  .status(java.lang.String)
//  .subjectFilter(java.lang.String)
//  .subjectFormat(java.util.List<java.lang.String>)
//  .subjectMatchAttribute(java.lang.String)
//  .subjectMatchType(java.lang.String)
//  .suspendedAction(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#issuer IdpSaml#issuer}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.kid">kid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#kid IdpSaml#kid}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_url IdpSaml#sso_url}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.acsType">acsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#acs_type IdpSaml#acs_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_action IdpSaml#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#id IdpSaml#id}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.nameFormat">nameFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#name_format IdpSaml#name_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#profile_master IdpSaml#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>java.lang.String</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.responseSignatureScope">responseSignatureScope</a></code> | <code>java.lang.String</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoBinding">ssoBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoDestination">ssoDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#status IdpSaml#status}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectFilter">subjectFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectFormat">subjectFormat</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_format IdpSaml#subject_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#username_template IdpSaml#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#issuer IdpSaml#issuer}.

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.kid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#kid IdpSaml#kid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#name IdpSaml#name}

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_url IdpSaml#sso_url}.

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.accountLinkAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}.

---

##### `acsType`<sup>Optional</sup> <a name="acsType" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.acsType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#acs_type IdpSaml#acs_type}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.deprovisionedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_action IdpSaml#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAssignment"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsFilter"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#id IdpSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.issuerMode"></a>

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#issuer_mode IdpSaml#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.maxClockSkew"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}.

---

##### `nameFormat`<sup>Optional</sup> <a name="nameFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.nameFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#name_format IdpSaml#name_format}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.profileMaster"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#profile_master IdpSaml#profile_master}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provisioningAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}.

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.requestSignatureAlgorithm"></a>

- *Type:* java.lang.String

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#request_signature_algorithm IdpSaml#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.requestSignatureScope"></a>

- *Type:* java.lang.String

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#request_signature_scope IdpSaml#request_signature_scope}

---

##### `responseSignatureAlgorithm`<sup>Optional</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.responseSignatureAlgorithm"></a>

- *Type:* java.lang.String

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#response_signature_algorithm IdpSaml#response_signature_algorithm}

---

##### `responseSignatureScope`<sup>Optional</sup> <a name="responseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.responseSignatureScope"></a>

- *Type:* java.lang.String

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#response_signature_scope IdpSaml#response_signature_scope}

---

##### `ssoBinding`<sup>Optional</sup> <a name="ssoBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}.

---

##### `ssoDestination`<sup>Optional</sup> <a name="ssoDestination" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoDestination"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#status IdpSaml#status}.

---

##### `subjectFilter`<sup>Optional</sup> <a name="subjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}.

---

##### `subjectFormat`<sup>Optional</sup> <a name="subjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectFormat"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_format IdpSaml#subject_format}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectMatchType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.suspendedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.usernameTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#username_template IdpSaml#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAcsType">resetAcsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetNameFormat">resetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureAlgorithm">resetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureScope">resetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureAlgorithm">resetResponseSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureScope">resetResponseSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoBinding">resetSsoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoDestination">resetSsoDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFilter">resetSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFormat">resetSubjectFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.idpSaml.IdpSaml.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.idpSaml.IdpSaml.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.idpSaml.IdpSaml.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkAction"></a>

```java
public void resetAccountLinkAction()
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkGroupInclude"></a>

```java
public void resetAccountLinkGroupInclude()
```

##### `resetAcsType` <a name="resetAcsType" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAcsType"></a>

```java
public void resetAcsType()
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetDeprovisionedAction"></a>

```java
public void resetDeprovisionedAction()
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAction"></a>

```java
public void resetGroupsAction()
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAssignment"></a>

```java
public void resetGroupsAssignment()
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAttribute"></a>

```java
public void resetGroupsAttribute()
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsFilter"></a>

```java
public void resetGroupsFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetId"></a>

```java
public void resetId()
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetIssuerMode"></a>

```java
public void resetIssuerMode()
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetMaxClockSkew"></a>

```java
public void resetMaxClockSkew()
```

##### `resetNameFormat` <a name="resetNameFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetNameFormat"></a>

```java
public void resetNameFormat()
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetProfileMaster"></a>

```java
public void resetProfileMaster()
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetProvisioningAction"></a>

```java
public void resetProvisioningAction()
```

##### `resetRequestSignatureAlgorithm` <a name="resetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureAlgorithm"></a>

```java
public void resetRequestSignatureAlgorithm()
```

##### `resetRequestSignatureScope` <a name="resetRequestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureScope"></a>

```java
public void resetRequestSignatureScope()
```

##### `resetResponseSignatureAlgorithm` <a name="resetResponseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureAlgorithm"></a>

```java
public void resetResponseSignatureAlgorithm()
```

##### `resetResponseSignatureScope` <a name="resetResponseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureScope"></a>

```java
public void resetResponseSignatureScope()
```

##### `resetSsoBinding` <a name="resetSsoBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoBinding"></a>

```java
public void resetSsoBinding()
```

##### `resetSsoDestination` <a name="resetSsoDestination" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoDestination"></a>

```java
public void resetSsoDestination()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSubjectFilter` <a name="resetSubjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFilter"></a>

```java
public void resetSubjectFilter()
```

##### `resetSubjectFormat` <a name="resetSubjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFormat"></a>

```java
public void resetSubjectFormat()
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchAttribute"></a>

```java
public void resetSubjectMatchAttribute()
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchType"></a>

```java
public void resetSubjectMatchType()
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSuspendedAction"></a>

```java
public void resetSuspendedAction()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdpSaml resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_saml.IdpSaml;

IdpSaml.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_saml.IdpSaml;

IdpSaml.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_saml.IdpSaml;

IdpSaml.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_saml.IdpSaml;

IdpSaml.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdpSaml.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdpSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdpSaml to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdpSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdpSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsBinding">acsBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.userTypeId">userTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsTypeInput">acsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsActionInput">groupsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilterInput">groupsFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerModeInput">issuerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.kidInput">kidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormatInput">nameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMasterInput">profileMasterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningActionInput">provisioningActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithmInput">requestSignatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScopeInput">requestSignatureScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithmInput">responseSignatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScopeInput">responseSignatureScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBindingInput">ssoBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestinationInput">ssoDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrlInput">ssoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilterInput">subjectFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormatInput">subjectFormatInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedActionInput">suspendedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsType">acsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.kid">kid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormat">nameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScope">responseSignatureScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBinding">ssoBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestination">ssoDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilter">subjectFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormat">subjectFormat</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acsBinding`<sup>Required</sup> <a name="acsBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsBinding"></a>

```java
public java.lang.String getAcsBinding();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userTypeId`<sup>Required</sup> <a name="userTypeId" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.userTypeId"></a>

```java
public java.lang.String getUserTypeId();
```

- *Type:* java.lang.String

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkActionInput"></a>

```java
public java.lang.String getAccountLinkActionInput();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupIncludeInput"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acsTypeInput`<sup>Optional</sup> <a name="acsTypeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsTypeInput"></a>

```java
public java.lang.String getAcsTypeInput();
```

- *Type:* java.lang.String

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedActionInput"></a>

```java
public java.lang.String getDeprovisionedActionInput();
```

- *Type:* java.lang.String

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsActionInput"></a>

```java
public java.lang.String getGroupsActionInput();
```

- *Type:* java.lang.String

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignmentInput"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignmentInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttributeInput"></a>

```java
public java.lang.String getGroupsAttributeInput();
```

- *Type:* java.lang.String

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilterInput"></a>

```java
public java.util.List<java.lang.String> getGroupsFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerModeInput"></a>

```java
public java.lang.String getIssuerModeInput();
```

- *Type:* java.lang.String

---

##### `kidInput`<sup>Optional</sup> <a name="kidInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.kidInput"></a>

```java
public java.lang.String getKidInput();
```

- *Type:* java.lang.String

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkewInput"></a>

```java
public java.lang.Number getMaxClockSkewInput();
```

- *Type:* java.lang.Number

---

##### `nameFormatInput`<sup>Optional</sup> <a name="nameFormatInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormatInput"></a>

```java
public java.lang.String getNameFormatInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMasterInput"></a>

```java
public java.lang.Object getProfileMasterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningActionInput"></a>

```java
public java.lang.String getProvisioningActionInput();
```

- *Type:* java.lang.String

---

##### `requestSignatureAlgorithmInput`<sup>Optional</sup> <a name="requestSignatureAlgorithmInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithmInput"></a>

```java
public java.lang.String getRequestSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `requestSignatureScopeInput`<sup>Optional</sup> <a name="requestSignatureScopeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScopeInput"></a>

```java
public java.lang.String getRequestSignatureScopeInput();
```

- *Type:* java.lang.String

---

##### `responseSignatureAlgorithmInput`<sup>Optional</sup> <a name="responseSignatureAlgorithmInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithmInput"></a>

```java
public java.lang.String getResponseSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `responseSignatureScopeInput`<sup>Optional</sup> <a name="responseSignatureScopeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScopeInput"></a>

```java
public java.lang.String getResponseSignatureScopeInput();
```

- *Type:* java.lang.String

---

##### `ssoBindingInput`<sup>Optional</sup> <a name="ssoBindingInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBindingInput"></a>

```java
public java.lang.String getSsoBindingInput();
```

- *Type:* java.lang.String

---

##### `ssoDestinationInput`<sup>Optional</sup> <a name="ssoDestinationInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestinationInput"></a>

```java
public java.lang.String getSsoDestinationInput();
```

- *Type:* java.lang.String

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrlInput"></a>

```java
public java.lang.String getSsoUrlInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `subjectFilterInput`<sup>Optional</sup> <a name="subjectFilterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilterInput"></a>

```java
public java.lang.String getSubjectFilterInput();
```

- *Type:* java.lang.String

---

##### `subjectFormatInput`<sup>Optional</sup> <a name="subjectFormatInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormatInput"></a>

```java
public java.util.List<java.lang.String> getSubjectFormatInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttributeInput"></a>

```java
public java.lang.String getSubjectMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchTypeInput"></a>

```java
public java.lang.String getSubjectMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedActionInput"></a>

```java
public java.lang.String getSuspendedActionInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acsType`<sup>Required</sup> <a name="acsType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsType"></a>

```java
public java.lang.String getAcsType();
```

- *Type:* java.lang.String

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameFormat`<sup>Required</sup> <a name="nameFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormat"></a>

```java
public java.lang.String getNameFormat();
```

- *Type:* java.lang.String

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

---

##### `requestSignatureAlgorithm`<sup>Required</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithm"></a>

```java
public java.lang.String getRequestSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `requestSignatureScope`<sup>Required</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScope"></a>

```java
public java.lang.String getRequestSignatureScope();
```

- *Type:* java.lang.String

---

##### `responseSignatureAlgorithm`<sup>Required</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithm"></a>

```java
public java.lang.String getResponseSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `responseSignatureScope`<sup>Required</sup> <a name="responseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScope"></a>

```java
public java.lang.String getResponseSignatureScope();
```

- *Type:* java.lang.String

---

##### `ssoBinding`<sup>Required</sup> <a name="ssoBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBinding"></a>

```java
public java.lang.String getSsoBinding();
```

- *Type:* java.lang.String

---

##### `ssoDestination`<sup>Required</sup> <a name="ssoDestination" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestination"></a>

```java
public java.lang.String getSsoDestination();
```

- *Type:* java.lang.String

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectFilter`<sup>Required</sup> <a name="subjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilter"></a>

```java
public java.lang.String getSubjectFilter();
```

- *Type:* java.lang.String

---

##### `subjectFormat`<sup>Required</sup> <a name="subjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormat"></a>

```java
public java.util.List<java.lang.String> getSubjectFormat();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSamlConfig <a name="IdpSamlConfig" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_saml.IdpSamlConfig;

IdpSamlConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .issuer(java.lang.String)
    .kid(java.lang.String)
    .name(java.lang.String)
    .ssoUrl(java.lang.String)
//  .accountLinkAction(java.lang.String)
//  .accountLinkGroupInclude(java.util.List<java.lang.String>)
//  .acsType(java.lang.String)
//  .deprovisionedAction(java.lang.String)
//  .groupsAction(java.lang.String)
//  .groupsAssignment(java.util.List<java.lang.String>)
//  .groupsAttribute(java.lang.String)
//  .groupsFilter(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .issuerMode(java.lang.String)
//  .maxClockSkew(java.lang.Number)
//  .nameFormat(java.lang.String)
//  .profileMaster(java.lang.Boolean)
//  .profileMaster(IResolvable)
//  .provisioningAction(java.lang.String)
//  .requestSignatureAlgorithm(java.lang.String)
//  .requestSignatureScope(java.lang.String)
//  .responseSignatureAlgorithm(java.lang.String)
//  .responseSignatureScope(java.lang.String)
//  .ssoBinding(java.lang.String)
//  .ssoDestination(java.lang.String)
//  .status(java.lang.String)
//  .subjectFilter(java.lang.String)
//  .subjectFormat(java.util.List<java.lang.String>)
//  .subjectMatchAttribute(java.lang.String)
//  .subjectMatchType(java.lang.String)
//  .suspendedAction(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#issuer IdpSaml#issuer}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.kid">kid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#kid IdpSaml#kid}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_url IdpSaml#sso_url}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.acsType">acsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#acs_type IdpSaml#acs_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_action IdpSaml#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#id IdpSaml#id}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.nameFormat">nameFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#name_format IdpSaml#name_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#profile_master IdpSaml#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>java.lang.String</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureScope">responseSignatureScope</a></code> | <code>java.lang.String</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoBinding">ssoBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoDestination">ssoDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#status IdpSaml#status}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFilter">subjectFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFormat">subjectFormat</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_format IdpSaml#subject_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#username_template IdpSaml#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#issuer IdpSaml#issuer}.

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#kid IdpSaml#kid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#name IdpSaml#name}

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_url IdpSaml#sso_url}.

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}.

---

##### `acsType`<sup>Optional</sup> <a name="acsType" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.acsType"></a>

```java
public java.lang.String getAcsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#acs_type IdpSaml#acs_type}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_action IdpSaml#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#id IdpSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#issuer_mode IdpSaml#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}.

---

##### `nameFormat`<sup>Optional</sup> <a name="nameFormat" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.nameFormat"></a>

```java
public java.lang.String getNameFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#name_format IdpSaml#name_format}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#profile_master IdpSaml#profile_master}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}.

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureAlgorithm"></a>

```java
public java.lang.String getRequestSignatureAlgorithm();
```

- *Type:* java.lang.String

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#request_signature_algorithm IdpSaml#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureScope"></a>

```java
public java.lang.String getRequestSignatureScope();
```

- *Type:* java.lang.String

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#request_signature_scope IdpSaml#request_signature_scope}

---

##### `responseSignatureAlgorithm`<sup>Optional</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureAlgorithm"></a>

```java
public java.lang.String getResponseSignatureAlgorithm();
```

- *Type:* java.lang.String

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#response_signature_algorithm IdpSaml#response_signature_algorithm}

---

##### `responseSignatureScope`<sup>Optional</sup> <a name="responseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureScope"></a>

```java
public java.lang.String getResponseSignatureScope();
```

- *Type:* java.lang.String

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#response_signature_scope IdpSaml#response_signature_scope}

---

##### `ssoBinding`<sup>Optional</sup> <a name="ssoBinding" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoBinding"></a>

```java
public java.lang.String getSsoBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}.

---

##### `ssoDestination`<sup>Optional</sup> <a name="ssoDestination" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoDestination"></a>

```java
public java.lang.String getSsoDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#status IdpSaml#status}.

---

##### `subjectFilter`<sup>Optional</sup> <a name="subjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFilter"></a>

```java
public java.lang.String getSubjectFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}.

---

##### `subjectFormat`<sup>Optional</sup> <a name="subjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFormat"></a>

```java
public java.util.List<java.lang.String> getSubjectFormat();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_format IdpSaml#subject_format}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/idp_saml#username_template IdpSaml#username_template}.

---



