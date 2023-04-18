# `okta_idp`

Refer to the Terraform Registory for docs: [`okta_idp`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp).

# `idp` Submodule <a name="`idp` Submodule" id="@cdktf/provider-okta.idp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Idp <a name="Idp" id="@cdktf/provider-okta.idp.Idp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp okta_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idp.Idp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp.Idp;

Idp.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#authorization_binding Idp#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#authorization_url Idp#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#client_id Idp#client_id}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#client_secret Idp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#issuer_url Idp#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.jwksBinding">jwksBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#jwks_binding Idp#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#jwks_url Idp#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#scopes Idp#scopes}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#token_binding Idp#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#token_url Idp#token_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#account_link_action Idp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#account_link_group_include Idp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#deprovisioned_action Idp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_action Idp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_assignment Idp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_attribute Idp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_filter Idp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#id Idp#id}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#max_clock_skew Idp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#profile_master Idp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.protocolType">protocolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#protocol_type Idp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#provisioning_action Idp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#status Idp#status}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#subject_match_attribute Idp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#subject_match_type Idp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#suspended_action Idp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.userInfoBinding">userInfoBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#user_info_binding Idp#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.userInfoUrl">userInfoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#user_info_url Idp#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#username_template Idp#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.authorizationBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#authorization_binding Idp#authorization_binding}.

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.authorizationUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#authorization_url Idp#authorization_url}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#client_id Idp#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#client_secret Idp#client_secret}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.issuerUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#issuer_url Idp#issuer_url}.

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.jwksBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#jwks_binding Idp#jwks_binding}.

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.jwksUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#jwks_url Idp#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#name Idp#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#scopes Idp#scopes}.

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.tokenBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#token_binding Idp#token_binding}.

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.tokenUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#token_url Idp#token_url}.

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.accountLinkAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#account_link_action Idp#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#account_link_group_include Idp#account_link_group_include}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.deprovisionedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#deprovisioned_action Idp#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_action Idp#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAssignment"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_assignment Idp#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_attribute Idp#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsFilter"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_filter Idp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#id Idp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.issuerMode"></a>

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#issuer_mode Idp#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.maxClockSkew"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#max_clock_skew Idp#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.profileMaster"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#profile_master Idp#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.protocolType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#protocol_type Idp#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.provisioningAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#provisioning_action Idp#provisioning_action}.

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.requestSignatureAlgorithm"></a>

- *Type:* java.lang.String

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#request_signature_algorithm Idp#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.requestSignatureScope"></a>

- *Type:* java.lang.String

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#request_signature_scope Idp#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#status Idp#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#subject_match_attribute Idp#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.subjectMatchType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#subject_match_type Idp#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.suspendedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#suspended_action Idp#suspended_action}.

---

##### `userInfoBinding`<sup>Optional</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.userInfoBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#user_info_binding Idp#user_info_binding}.

---

##### `userInfoUrl`<sup>Optional</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.userInfoUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#user_info_url Idp#user_info_url}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.usernameTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#username_template Idp#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetRequestSignatureAlgorithm">resetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetRequestSignatureScope">resetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUserInfoBinding">resetUserInfoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUserInfoUrl">resetUserInfoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.idp.Idp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.idp.Idp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idp.Idp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idp.Idp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.idp.Idp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idp.Idp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.idp.Idp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.idp.Idp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.idp.Idp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.idp.Idp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.idp.Idp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.idp.Idp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.idp.Idp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.idp.Idp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.idp.Idp.resetAccountLinkAction"></a>

```java
public void resetAccountLinkAction()
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.idp.Idp.resetAccountLinkGroupInclude"></a>

```java
public void resetAccountLinkGroupInclude()
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.idp.Idp.resetDeprovisionedAction"></a>

```java
public void resetDeprovisionedAction()
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.idp.Idp.resetGroupsAction"></a>

```java
public void resetGroupsAction()
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.idp.Idp.resetGroupsAssignment"></a>

```java
public void resetGroupsAssignment()
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.idp.Idp.resetGroupsAttribute"></a>

```java
public void resetGroupsAttribute()
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.idp.Idp.resetGroupsFilter"></a>

```java
public void resetGroupsFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.idp.Idp.resetId"></a>

```java
public void resetId()
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.idp.Idp.resetIssuerMode"></a>

```java
public void resetIssuerMode()
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.idp.Idp.resetMaxClockSkew"></a>

```java
public void resetMaxClockSkew()
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.idp.Idp.resetProfileMaster"></a>

```java
public void resetProfileMaster()
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-okta.idp.Idp.resetProtocolType"></a>

```java
public void resetProtocolType()
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.idp.Idp.resetProvisioningAction"></a>

```java
public void resetProvisioningAction()
```

##### `resetRequestSignatureAlgorithm` <a name="resetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idp.Idp.resetRequestSignatureAlgorithm"></a>

```java
public void resetRequestSignatureAlgorithm()
```

##### `resetRequestSignatureScope` <a name="resetRequestSignatureScope" id="@cdktf/provider-okta.idp.Idp.resetRequestSignatureScope"></a>

```java
public void resetRequestSignatureScope()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.idp.Idp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.idp.Idp.resetSubjectMatchAttribute"></a>

```java
public void resetSubjectMatchAttribute()
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.idp.Idp.resetSubjectMatchType"></a>

```java
public void resetSubjectMatchType()
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.idp.Idp.resetSuspendedAction"></a>

```java
public void resetSuspendedAction()
```

##### `resetUserInfoBinding` <a name="resetUserInfoBinding" id="@cdktf/provider-okta.idp.Idp.resetUserInfoBinding"></a>

```java
public void resetUserInfoBinding()
```

##### `resetUserInfoUrl` <a name="resetUserInfoUrl" id="@cdktf/provider-okta.idp.Idp.resetUserInfoUrl"></a>

```java
public void resetUserInfoUrl()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.idp.Idp.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.idp.Idp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp.Idp;

Idp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.idp.Idp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp.Idp;

Idp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.idp.Idp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp.Idp;

Idp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userTypeId">userTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationBindingInput">authorizationBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsActionInput">groupsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsFilterInput">groupsFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerModeInput">issuerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerUrlInput">issuerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksBindingInput">jwksBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksUrlInput">jwksUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.profileMasterInput">profileMasterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.protocolTypeInput">protocolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioningActionInput">provisioningActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithmInput">requestSignatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureScopeInput">requestSignatureScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.suspendedActionInput">suspendedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenBindingInput">tokenBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenUrlInput">tokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoBindingInput">userInfoBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoUrlInput">userInfoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksBinding">jwksBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoBinding">userInfoBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoUrl">userInfoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idp.Idp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.idp.Idp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idp.Idp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.idp.Idp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.idp.Idp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.idp.Idp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.idp.Idp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idp.Idp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idp.Idp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idp.Idp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idp.Idp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idp.Idp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idp.Idp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idp.Idp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idp.Idp.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userTypeId`<sup>Required</sup> <a name="userTypeId" id="@cdktf/provider-okta.idp.Idp.property.userTypeId"></a>

```java
public java.lang.String getUserTypeId();
```

- *Type:* java.lang.String

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.idp.Idp.property.accountLinkActionInput"></a>

```java
public java.lang.String getAccountLinkActionInput();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.idp.Idp.property.accountLinkGroupIncludeInput"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationBindingInput`<sup>Optional</sup> <a name="authorizationBindingInput" id="@cdktf/provider-okta.idp.Idp.property.authorizationBindingInput"></a>

```java
public java.lang.String getAuthorizationBindingInput();
```

- *Type:* java.lang.String

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktf/provider-okta.idp.Idp.property.authorizationUrlInput"></a>

```java
public java.lang.String getAuthorizationUrlInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.idp.Idp.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-okta.idp.Idp.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.idp.Idp.property.deprovisionedActionInput"></a>

```java
public java.lang.String getDeprovisionedActionInput();
```

- *Type:* java.lang.String

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.idp.Idp.property.groupsActionInput"></a>

```java
public java.lang.String getGroupsActionInput();
```

- *Type:* java.lang.String

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.idp.Idp.property.groupsAssignmentInput"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignmentInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.idp.Idp.property.groupsAttributeInput"></a>

```java
public java.lang.String getGroupsAttributeInput();
```

- *Type:* java.lang.String

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.idp.Idp.property.groupsFilterInput"></a>

```java
public java.util.List<java.lang.String> getGroupsFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.idp.Idp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.idp.Idp.property.issuerModeInput"></a>

```java
public java.lang.String getIssuerModeInput();
```

- *Type:* java.lang.String

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-okta.idp.Idp.property.issuerUrlInput"></a>

```java
public java.lang.String getIssuerUrlInput();
```

- *Type:* java.lang.String

---

##### `jwksBindingInput`<sup>Optional</sup> <a name="jwksBindingInput" id="@cdktf/provider-okta.idp.Idp.property.jwksBindingInput"></a>

```java
public java.lang.String getJwksBindingInput();
```

- *Type:* java.lang.String

---

##### `jwksUrlInput`<sup>Optional</sup> <a name="jwksUrlInput" id="@cdktf/provider-okta.idp.Idp.property.jwksUrlInput"></a>

```java
public java.lang.String getJwksUrlInput();
```

- *Type:* java.lang.String

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.idp.Idp.property.maxClockSkewInput"></a>

```java
public java.lang.Number getMaxClockSkewInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.idp.Idp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.idp.Idp.property.profileMasterInput"></a>

```java
public java.lang.Object getProfileMasterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-okta.idp.Idp.property.protocolTypeInput"></a>

```java
public java.lang.String getProtocolTypeInput();
```

- *Type:* java.lang.String

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.idp.Idp.property.provisioningActionInput"></a>

```java
public java.lang.String getProvisioningActionInput();
```

- *Type:* java.lang.String

---

##### `requestSignatureAlgorithmInput`<sup>Optional</sup> <a name="requestSignatureAlgorithmInput" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithmInput"></a>

```java
public java.lang.String getRequestSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `requestSignatureScopeInput`<sup>Optional</sup> <a name="requestSignatureScopeInput" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureScopeInput"></a>

```java
public java.lang.String getRequestSignatureScopeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.idp.Idp.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.idp.Idp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchAttributeInput"></a>

```java
public java.lang.String getSubjectMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchTypeInput"></a>

```java
public java.lang.String getSubjectMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.idp.Idp.property.suspendedActionInput"></a>

```java
public java.lang.String getSuspendedActionInput();
```

- *Type:* java.lang.String

---

##### `tokenBindingInput`<sup>Optional</sup> <a name="tokenBindingInput" id="@cdktf/provider-okta.idp.Idp.property.tokenBindingInput"></a>

```java
public java.lang.String getTokenBindingInput();
```

- *Type:* java.lang.String

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-okta.idp.Idp.property.tokenUrlInput"></a>

```java
public java.lang.String getTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `userInfoBindingInput`<sup>Optional</sup> <a name="userInfoBindingInput" id="@cdktf/provider-okta.idp.Idp.property.userInfoBindingInput"></a>

```java
public java.lang.String getUserInfoBindingInput();
```

- *Type:* java.lang.String

---

##### `userInfoUrlInput`<sup>Optional</sup> <a name="userInfoUrlInput" id="@cdktf/provider-okta.idp.Idp.property.userInfoUrlInput"></a>

```java
public java.lang.String getUserInfoUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.idp.Idp.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idp.Idp.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idp.Idp.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idp.Idp.property.authorizationBinding"></a>

```java
public java.lang.String getAuthorizationBinding();
```

- *Type:* java.lang.String

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idp.Idp.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idp.Idp.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idp.Idp.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idp.Idp.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.idp.Idp.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idp.Idp.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idp.Idp.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idp.Idp.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idp.Idp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.idp.Idp.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idp.Idp.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idp.Idp.property.jwksBinding"></a>

```java
public java.lang.String getJwksBinding();
```

- *Type:* java.lang.String

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idp.Idp.property.jwksUrl"></a>

```java
public java.lang.String getJwksUrl();
```

- *Type:* java.lang.String

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idp.Idp.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idp.Idp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.idp.Idp.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.idp.Idp.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idp.Idp.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

---

##### `requestSignatureAlgorithm`<sup>Required</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithm"></a>

```java
public java.lang.String getRequestSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `requestSignatureScope`<sup>Required</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureScope"></a>

```java
public java.lang.String getRequestSignatureScope();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idp.Idp.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idp.Idp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idp.Idp.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idp.Idp.property.tokenBinding"></a>

```java
public java.lang.String getTokenBinding();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idp.Idp.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `userInfoBinding`<sup>Required</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idp.Idp.property.userInfoBinding"></a>

```java
public java.lang.String getUserInfoBinding();
```

- *Type:* java.lang.String

---

##### `userInfoUrl`<sup>Required</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idp.Idp.property.userInfoUrl"></a>

```java
public java.lang.String getUserInfoUrl();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idp.Idp.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idp.Idp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdpConfig <a name="IdpConfig" id="@cdktf/provider-okta.idp.IdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idp.IdpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp.IdpConfig;

IdpConfig.builder()
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
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#authorization_binding Idp#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#authorization_url Idp#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#client_id Idp#client_id}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#client_secret Idp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#issuer_url Idp#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.jwksBinding">jwksBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#jwks_binding Idp#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#jwks_url Idp#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#scopes Idp#scopes}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#token_binding Idp#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#token_url Idp#token_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#account_link_action Idp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#account_link_group_include Idp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#deprovisioned_action Idp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_action Idp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_assignment Idp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_attribute Idp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_filter Idp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#id Idp#id}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#max_clock_skew Idp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#profile_master Idp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#protocol_type Idp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#provisioning_action Idp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>java.lang.String</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureScope">requestSignatureScope</a></code> | <code>java.lang.String</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#status Idp#status}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#subject_match_attribute Idp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#subject_match_type Idp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#suspended_action Idp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.userInfoBinding">userInfoBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#user_info_binding Idp#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.userInfoUrl">userInfoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#user_info_url Idp#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#username_template Idp#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idp.IdpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idp.IdpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idp.IdpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idp.IdpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idp.IdpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idp.IdpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idp.IdpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.authorizationBinding"></a>

```java
public java.lang.String getAuthorizationBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#authorization_binding Idp#authorization_binding}.

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#authorization_url Idp#authorization_url}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idp.IdpConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#client_id Idp#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idp.IdpConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#client_secret Idp#client_secret}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#issuer_url Idp#issuer_url}.

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.jwksBinding"></a>

```java
public java.lang.String getJwksBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#jwks_binding Idp#jwks_binding}.

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.jwksUrl"></a>

```java
public java.lang.String getJwksUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#jwks_url Idp#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idp.IdpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#name Idp#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idp.IdpConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#scopes Idp#scopes}.

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.tokenBinding"></a>

```java
public java.lang.String getTokenBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#token_binding Idp#token_binding}.

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#token_url Idp#token_url}.

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idp.IdpConfig.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#account_link_action Idp#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idp.IdpConfig.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#account_link_group_include Idp#account_link_group_include}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idp.IdpConfig.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#deprovisioned_action Idp#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_action Idp#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_assignment Idp#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_attribute Idp#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#groups_filter Idp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idp.IdpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#id Idp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idp.IdpConfig.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#issuer_mode Idp#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idp.IdpConfig.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#max_clock_skew Idp#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idp.IdpConfig.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#profile_master Idp#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idp.IdpConfig.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#protocol_type Idp#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idp.IdpConfig.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#provisioning_action Idp#provisioning_action}.

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureAlgorithm"></a>

```java
public java.lang.String getRequestSignatureAlgorithm();
```

- *Type:* java.lang.String

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#request_signature_algorithm Idp#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureScope"></a>

```java
public java.lang.String getRequestSignatureScope();
```

- *Type:* java.lang.String

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#request_signature_scope Idp#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idp.IdpConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#status Idp#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#subject_match_attribute Idp#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#subject_match_type Idp#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idp.IdpConfig.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#suspended_action Idp#suspended_action}.

---

##### `userInfoBinding`<sup>Optional</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.userInfoBinding"></a>

```java
public java.lang.String getUserInfoBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#user_info_binding Idp#user_info_binding}.

---

##### `userInfoUrl`<sup>Optional</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.userInfoUrl"></a>

```java
public java.lang.String getUserInfoUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#user_info_url Idp#user_info_url}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idp.IdpConfig.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/idp#username_template Idp#username_template}.

---



