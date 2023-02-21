# `idpOidc` Submodule <a name="`idpOidc` Submodule" id="@cdktf/provider-okta.idpOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpOidc <a name="IdpOidc" id="@cdktf/provider-okta.idpOidc.IdpOidc"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc okta_idp_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_oidc.IdpOidc;

IdpOidc.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authorizationBinding(java.lang.String)
    .authorizationUrl(java.lang.String)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .issuerUrl(java.lang.String)
    .jwksBinding(java.lang.String)
    .jwksUrl(java.lang.String)
    .name(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .tokenBinding(java.lang.String)
    .tokenUrl(java.lang.String)
//  .accountLinkAction(java.lang.String)
//  .accountLinkGroupInclude(java.util.List<java.lang.String>)
//  .deprovisionedAction(java.lang.String)
//  .groupsAction(java.lang.String)
//  .groupsAssignment(java.util.List<java.lang.String>)
//  .groupsAttribute(java.lang.String)
//  .groupsFilter(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .issuerMode(java.lang.String)
//  .maxClockSkew(java.lang.Number)
//  .profileMaster(java.lang.Boolean)
//  .profileMaster(IResolvable)
//  .protocolType(java.lang.String)
//  .provisioningAction(java.lang.String)
//  .requestSignatureAlgorithm(java.lang.String)
//  .requestSignatureScope(java.lang.String)
//  .status(java.lang.String)
//  .subjectMatchAttribute(java.lang.String)
//  .subjectMatchType(java.lang.String)
//  .suspendedAction(java.lang.String)
//  .userInfoBinding(java.lang.String)
//  .userInfoUrl(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.jwksBinding">jwksBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.protocolType">protocolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.userInfoBinding">userInfoBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.userInfoUrl">userInfoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.authorizationBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}.

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.authorizationUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.issuerUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}.

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.jwksBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}.

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.jwksUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#name IdpOidc#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}.

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.tokenBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}.

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.tokenUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}.

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.accountLinkAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.deprovisionedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAssignment"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsFilter"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.issuerMode"></a>

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_mode IdpOidc#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.maxClockSkew"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.profileMaster"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.protocolType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provisioningAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}.

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.requestSignatureAlgorithm"></a>

- *Type:* java.lang.String

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_algorithm IdpOidc#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.requestSignatureScope"></a>

- *Type:* java.lang.String

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_scope IdpOidc#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.subjectMatchType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.suspendedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}.

---

##### `userInfoBinding`<sup>Optional</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.userInfoBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}.

---

##### `userInfoUrl`<sup>Optional</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.userInfoUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.usernameTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm">resetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope">resetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding">resetUserInfoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl">resetUserInfoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.idpOidc.IdpOidc.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction"></a>

```java
public void resetAccountLinkAction()
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude"></a>

```java
public void resetAccountLinkGroupInclude()
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction"></a>

```java
public void resetDeprovisionedAction()
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction"></a>

```java
public void resetGroupsAction()
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment"></a>

```java
public void resetGroupsAssignment()
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute"></a>

```java
public void resetGroupsAttribute()
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter"></a>

```java
public void resetGroupsFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetId"></a>

```java
public void resetId()
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode"></a>

```java
public void resetIssuerMode()
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew"></a>

```java
public void resetMaxClockSkew()
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster"></a>

```java
public void resetProfileMaster()
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType"></a>

```java
public void resetProtocolType()
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction"></a>

```java
public void resetProvisioningAction()
```

##### `resetRequestSignatureAlgorithm` <a name="resetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm"></a>

```java
public void resetRequestSignatureAlgorithm()
```

##### `resetRequestSignatureScope` <a name="resetRequestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope"></a>

```java
public void resetRequestSignatureScope()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute"></a>

```java
public void resetSubjectMatchAttribute()
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType"></a>

```java
public void resetSubjectMatchType()
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction"></a>

```java
public void resetSuspendedAction()
```

##### `resetUserInfoBinding` <a name="resetUserInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding"></a>

```java
public void resetUserInfoBinding()
```

##### `resetUserInfoUrl` <a name="resetUserInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl"></a>

```java
public void resetUserInfoUrl()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_oidc.IdpOidc;

IdpOidc.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_oidc.IdpOidc;

IdpOidc.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_oidc.IdpOidc;

IdpOidc.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId">userTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput">authorizationBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput">groupsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput">groupsFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput">issuerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput">issuerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput">jwksBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput">jwksUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput">profileMasterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput">protocolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput">provisioningActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput">requestSignatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput">requestSignatureScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput">suspendedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput">tokenBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput">tokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput">userInfoBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput">userInfoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding">jwksBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding">userInfoBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl">userInfoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userTypeId`<sup>Required</sup> <a name="userTypeId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId"></a>

```java
public java.lang.String getUserTypeId();
```

- *Type:* java.lang.String

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput"></a>

```java
public java.lang.String getAccountLinkActionInput();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationBindingInput`<sup>Optional</sup> <a name="authorizationBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput"></a>

```java
public java.lang.String getAuthorizationBindingInput();
```

- *Type:* java.lang.String

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput"></a>

```java
public java.lang.String getAuthorizationUrlInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput"></a>

```java
public java.lang.String getDeprovisionedActionInput();
```

- *Type:* java.lang.String

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput"></a>

```java
public java.lang.String getGroupsActionInput();
```

- *Type:* java.lang.String

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignmentInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput"></a>

```java
public java.lang.String getGroupsAttributeInput();
```

- *Type:* java.lang.String

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput"></a>

```java
public java.util.List<java.lang.String> getGroupsFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput"></a>

```java
public java.lang.String getIssuerModeInput();
```

- *Type:* java.lang.String

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput"></a>

```java
public java.lang.String getIssuerUrlInput();
```

- *Type:* java.lang.String

---

##### `jwksBindingInput`<sup>Optional</sup> <a name="jwksBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput"></a>

```java
public java.lang.String getJwksBindingInput();
```

- *Type:* java.lang.String

---

##### `jwksUrlInput`<sup>Optional</sup> <a name="jwksUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput"></a>

```java
public java.lang.String getJwksUrlInput();
```

- *Type:* java.lang.String

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput"></a>

```java
public java.lang.Number getMaxClockSkewInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput"></a>

```java
public java.lang.Object getProfileMasterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput"></a>

```java
public java.lang.String getProtocolTypeInput();
```

- *Type:* java.lang.String

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput"></a>

```java
public java.lang.String getProvisioningActionInput();
```

- *Type:* java.lang.String

---

##### `requestSignatureAlgorithmInput`<sup>Optional</sup> <a name="requestSignatureAlgorithmInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput"></a>

```java
public java.lang.String getRequestSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `requestSignatureScopeInput`<sup>Optional</sup> <a name="requestSignatureScopeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput"></a>

```java
public java.lang.String getRequestSignatureScopeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput"></a>

```java
public java.lang.String getSubjectMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput"></a>

```java
public java.lang.String getSubjectMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput"></a>

```java
public java.lang.String getSuspendedActionInput();
```

- *Type:* java.lang.String

---

##### `tokenBindingInput`<sup>Optional</sup> <a name="tokenBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput"></a>

```java
public java.lang.String getTokenBindingInput();
```

- *Type:* java.lang.String

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput"></a>

```java
public java.lang.String getTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `userInfoBindingInput`<sup>Optional</sup> <a name="userInfoBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput"></a>

```java
public java.lang.String getUserInfoBindingInput();
```

- *Type:* java.lang.String

---

##### `userInfoUrlInput`<sup>Optional</sup> <a name="userInfoUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput"></a>

```java
public java.lang.String getUserInfoUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding"></a>

```java
public java.lang.String getAuthorizationBinding();
```

- *Type:* java.lang.String

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding"></a>

```java
public java.lang.String getJwksBinding();
```

- *Type:* java.lang.String

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl"></a>

```java
public java.lang.String getJwksUrl();
```

- *Type:* java.lang.String

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

---

##### `requestSignatureAlgorithm`<sup>Required</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm"></a>

```java
public java.lang.String getRequestSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `requestSignatureScope`<sup>Required</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope"></a>

```java
public java.lang.String getRequestSignatureScope();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding"></a>

```java
public java.lang.String getTokenBinding();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `userInfoBinding`<sup>Required</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding"></a>

```java
public java.lang.String getUserInfoBinding();
```

- *Type:* java.lang.String

---

##### `userInfoUrl`<sup>Required</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl"></a>

```java
public java.lang.String getUserInfoUrl();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdpOidcConfig <a name="IdpOidcConfig" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_oidc.IdpOidcConfig;

IdpOidcConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authorizationBinding(java.lang.String)
    .authorizationUrl(java.lang.String)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .issuerUrl(java.lang.String)
    .jwksBinding(java.lang.String)
    .jwksUrl(java.lang.String)
    .name(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .tokenBinding(java.lang.String)
    .tokenUrl(java.lang.String)
//  .accountLinkAction(java.lang.String)
//  .accountLinkGroupInclude(java.util.List<java.lang.String>)
//  .deprovisionedAction(java.lang.String)
//  .groupsAction(java.lang.String)
//  .groupsAssignment(java.util.List<java.lang.String>)
//  .groupsAttribute(java.lang.String)
//  .groupsFilter(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .issuerMode(java.lang.String)
//  .maxClockSkew(java.lang.Number)
//  .profileMaster(java.lang.Boolean)
//  .profileMaster(IResolvable)
//  .protocolType(java.lang.String)
//  .provisioningAction(java.lang.String)
//  .requestSignatureAlgorithm(java.lang.String)
//  .requestSignatureScope(java.lang.String)
//  .status(java.lang.String)
//  .subjectMatchAttribute(java.lang.String)
//  .subjectMatchType(java.lang.String)
//  .suspendedAction(java.lang.String)
//  .userInfoBinding(java.lang.String)
//  .userInfoUrl(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding">jwksBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding">userInfoBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl">userInfoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding"></a>

```java
public java.lang.String getAuthorizationBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}.

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}.

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding"></a>

```java
public java.lang.String getJwksBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}.

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl"></a>

```java
public java.lang.String getJwksUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#name IdpOidc#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}.

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding"></a>

```java
public java.lang.String getTokenBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}.

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}.

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_mode IdpOidc#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}.

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm"></a>

```java
public java.lang.String getRequestSignatureAlgorithm();
```

- *Type:* java.lang.String

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_algorithm IdpOidc#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope"></a>

```java
public java.lang.String getRequestSignatureScope();
```

- *Type:* java.lang.String

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_scope IdpOidc#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}.

---

##### `userInfoBinding`<sup>Optional</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding"></a>

```java
public java.lang.String getUserInfoBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}.

---

##### `userInfoUrl`<sup>Optional</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl"></a>

```java
public java.lang.String getUserInfoUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}.

---



