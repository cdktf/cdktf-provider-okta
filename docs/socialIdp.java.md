# `okta_social_idp`

Refer to the Terraform Registory for docs: [`okta_social_idp`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp).

# `socialIdp` Submodule <a name="`socialIdp` Submodule" id="@cdktf/provider-okta.socialIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SocialIdp <a name="SocialIdp" id="@cdktf/provider-okta.socialIdp.SocialIdp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp okta_social_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.social_idp.SocialIdp;

SocialIdp.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .accountLinkAction(java.lang.String)
//  .accountLinkGroupInclude(java.util.List<java.lang.String>)
//  .appleKid(java.lang.String)
//  .applePrivateKey(java.lang.String)
//  .appleTeamId(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .deprovisionedAction(java.lang.String)
//  .groupsAction(java.lang.String)
//  .groupsAssignment(java.util.List<java.lang.String>)
//  .groupsAttribute(java.lang.String)
//  .groupsFilter(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .issuerMode(java.lang.String)
//  .matchAttribute(java.lang.String)
//  .matchType(java.lang.String)
//  .maxClockSkew(java.lang.Number)
//  .profileMaster(java.lang.Boolean)
//  .profileMaster(IResolvable)
//  .protocolType(java.lang.String)
//  .provisioningAction(java.lang.String)
//  .status(java.lang.String)
//  .subjectMatchAttribute(java.lang.String)
//  .subjectMatchType(java.lang.String)
//  .suspendedAction(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#scopes SocialIdp#scopes}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#account_link_action SocialIdp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#account_link_group_include SocialIdp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.appleKid">appleKid</a></code> | <code>java.lang.String</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.applePrivateKey">applePrivateKey</a></code> | <code>java.lang.String</code> | The PKCS #8 encoded private key that you created for the client and downloaded from Apple. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.appleTeamId">appleTeamId</a></code> | <code>java.lang.String</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#client_id SocialIdp#client_id}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#client_secret SocialIdp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#deprovisioned_action SocialIdp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_action SocialIdp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_assignment SocialIdp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_attribute SocialIdp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_filter SocialIdp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#id SocialIdp#id}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.matchAttribute">matchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#match_attribute SocialIdp#match_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.matchType">matchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#match_type SocialIdp#match_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#max_clock_skew SocialIdp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#profile_master SocialIdp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.protocolType">protocolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#protocol_type SocialIdp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#provisioning_action SocialIdp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#status SocialIdp#status}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#subject_match_attribute SocialIdp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#subject_match_type SocialIdp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#suspended_action SocialIdp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#username_template SocialIdp#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#name SocialIdp#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#scopes SocialIdp#scopes}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#type SocialIdp#type}

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.accountLinkAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#account_link_action SocialIdp#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#account_link_group_include SocialIdp#account_link_group_include}.

---

##### `appleKid`<sup>Optional</sup> <a name="appleKid" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.appleKid"></a>

- *Type:* java.lang.String

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#apple_kid SocialIdp#apple_kid}

---

##### `applePrivateKey`<sup>Optional</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.applePrivateKey"></a>

- *Type:* java.lang.String

The PKCS #8 encoded private key that you created for the client and downloaded from Apple.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#apple_private_key SocialIdp#apple_private_key}

---

##### `appleTeamId`<sup>Optional</sup> <a name="appleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.appleTeamId"></a>

- *Type:* java.lang.String

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#apple_team_id SocialIdp#apple_team_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#client_id SocialIdp#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#client_secret SocialIdp#client_secret}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.deprovisionedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#deprovisioned_action SocialIdp#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.groupsAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_action SocialIdp#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.groupsAssignment"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_assignment SocialIdp#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.groupsAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_attribute SocialIdp#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.groupsFilter"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_filter SocialIdp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#id SocialIdp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.issuerMode"></a>

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#issuer_mode SocialIdp#issuer_mode}

---

##### `matchAttribute`<sup>Optional</sup> <a name="matchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.matchAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#match_attribute SocialIdp#match_attribute}.

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.matchType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#match_type SocialIdp#match_type}.

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.maxClockSkew"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#max_clock_skew SocialIdp#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.profileMaster"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#profile_master SocialIdp#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.protocolType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#protocol_type SocialIdp#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.provisioningAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#provisioning_action SocialIdp#provisioning_action}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#status SocialIdp#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#subject_match_attribute SocialIdp#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.subjectMatchType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#subject_match_type SocialIdp#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.suspendedAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#suspended_action SocialIdp#suspended_action}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.usernameTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#username_template SocialIdp#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleKid">resetAppleKid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetApplePrivateKey">resetApplePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleTeamId">resetAppleTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchAttribute">resetMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchType">resetMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.socialIdp.SocialIdp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.socialIdp.SocialIdp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.socialIdp.SocialIdp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkAction"></a>

```java
public void resetAccountLinkAction()
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkGroupInclude"></a>

```java
public void resetAccountLinkGroupInclude()
```

##### `resetAppleKid` <a name="resetAppleKid" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleKid"></a>

```java
public void resetAppleKid()
```

##### `resetApplePrivateKey` <a name="resetApplePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetApplePrivateKey"></a>

```java
public void resetApplePrivateKey()
```

##### `resetAppleTeamId` <a name="resetAppleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleTeamId"></a>

```java
public void resetAppleTeamId()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetDeprovisionedAction"></a>

```java
public void resetDeprovisionedAction()
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAction"></a>

```java
public void resetGroupsAction()
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAssignment"></a>

```java
public void resetGroupsAssignment()
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAttribute"></a>

```java
public void resetGroupsAttribute()
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsFilter"></a>

```java
public void resetGroupsFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetId"></a>

```java
public void resetId()
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetIssuerMode"></a>

```java
public void resetIssuerMode()
```

##### `resetMatchAttribute` <a name="resetMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchAttribute"></a>

```java
public void resetMatchAttribute()
```

##### `resetMatchType` <a name="resetMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchType"></a>

```java
public void resetMatchType()
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMaxClockSkew"></a>

```java
public void resetMaxClockSkew()
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProfileMaster"></a>

```java
public void resetProfileMaster()
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProtocolType"></a>

```java
public void resetProtocolType()
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProvisioningAction"></a>

```java
public void resetProvisioningAction()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchAttribute"></a>

```java
public void resetSubjectMatchAttribute()
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchType"></a>

```java
public void resetSubjectMatchType()
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSuspendedAction"></a>

```java
public void resetSuspendedAction()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.social_idp.SocialIdp;

SocialIdp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.social_idp.SocialIdp;

SocialIdp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.social_idp.SocialIdp;

SocialIdp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKidInput">appleKidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKeyInput">applePrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamIdInput">appleTeamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsActionInput">groupsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilterInput">groupsFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerModeInput">issuerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttributeInput">matchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMasterInput">profileMasterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolTypeInput">protocolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningActionInput">provisioningActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedActionInput">suspendedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKid">appleKid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKey">applePrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamId">appleTeamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttribute">matchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationBinding"></a>

```java
public java.lang.String getAuthorizationBinding();
```

- *Type:* java.lang.String

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenBinding"></a>

```java
public java.lang.String getTokenBinding();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkActionInput"></a>

```java
public java.lang.String getAccountLinkActionInput();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupIncludeInput"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appleKidInput`<sup>Optional</sup> <a name="appleKidInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKidInput"></a>

```java
public java.lang.String getAppleKidInput();
```

- *Type:* java.lang.String

---

##### `applePrivateKeyInput`<sup>Optional</sup> <a name="applePrivateKeyInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKeyInput"></a>

```java
public java.lang.String getApplePrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `appleTeamIdInput`<sup>Optional</sup> <a name="appleTeamIdInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamIdInput"></a>

```java
public java.lang.String getAppleTeamIdInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedActionInput"></a>

```java
public java.lang.String getDeprovisionedActionInput();
```

- *Type:* java.lang.String

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsActionInput"></a>

```java
public java.lang.String getGroupsActionInput();
```

- *Type:* java.lang.String

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignmentInput"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignmentInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttributeInput"></a>

```java
public java.lang.String getGroupsAttributeInput();
```

- *Type:* java.lang.String

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilterInput"></a>

```java
public java.util.List<java.lang.String> getGroupsFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerModeInput"></a>

```java
public java.lang.String getIssuerModeInput();
```

- *Type:* java.lang.String

---

##### `matchAttributeInput`<sup>Optional</sup> <a name="matchAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttributeInput"></a>

```java
public java.lang.String getMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkewInput"></a>

```java
public java.lang.Number getMaxClockSkewInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMasterInput"></a>

```java
public java.lang.Object getProfileMasterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolTypeInput"></a>

```java
public java.lang.String getProtocolTypeInput();
```

- *Type:* java.lang.String

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningActionInput"></a>

```java
public java.lang.String getProvisioningActionInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttributeInput"></a>

```java
public java.lang.String getSubjectMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchTypeInput"></a>

```java
public java.lang.String getSubjectMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedActionInput"></a>

```java
public java.lang.String getSuspendedActionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appleKid`<sup>Required</sup> <a name="appleKid" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKid"></a>

```java
public java.lang.String getAppleKid();
```

- *Type:* java.lang.String

---

##### `applePrivateKey`<sup>Required</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKey"></a>

```java
public java.lang.String getApplePrivateKey();
```

- *Type:* java.lang.String

---

##### `appleTeamId`<sup>Required</sup> <a name="appleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamId"></a>

```java
public java.lang.String getAppleTeamId();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `matchAttribute`<sup>Required</sup> <a name="matchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttribute"></a>

```java
public java.lang.String getMatchAttribute();
```

- *Type:* java.lang.String

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SocialIdpConfig <a name="SocialIdpConfig" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.social_idp.SocialIdpConfig;

SocialIdpConfig.builder()
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
    .name(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .accountLinkAction(java.lang.String)
//  .accountLinkGroupInclude(java.util.List<java.lang.String>)
//  .appleKid(java.lang.String)
//  .applePrivateKey(java.lang.String)
//  .appleTeamId(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .deprovisionedAction(java.lang.String)
//  .groupsAction(java.lang.String)
//  .groupsAssignment(java.util.List<java.lang.String>)
//  .groupsAttribute(java.lang.String)
//  .groupsFilter(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .issuerMode(java.lang.String)
//  .matchAttribute(java.lang.String)
//  .matchType(java.lang.String)
//  .maxClockSkew(java.lang.Number)
//  .profileMaster(java.lang.Boolean)
//  .profileMaster(IResolvable)
//  .protocolType(java.lang.String)
//  .provisioningAction(java.lang.String)
//  .status(java.lang.String)
//  .subjectMatchAttribute(java.lang.String)
//  .subjectMatchType(java.lang.String)
//  .suspendedAction(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#scopes SocialIdp#scopes}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.type">type</a></code> | <code>java.lang.String</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#account_link_action SocialIdp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#account_link_group_include SocialIdp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleKid">appleKid</a></code> | <code>java.lang.String</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.applePrivateKey">applePrivateKey</a></code> | <code>java.lang.String</code> | The PKCS #8 encoded private key that you created for the client and downloaded from Apple. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleTeamId">appleTeamId</a></code> | <code>java.lang.String</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#client_id SocialIdp#client_id}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#client_secret SocialIdp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#deprovisioned_action SocialIdp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_action SocialIdp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_assignment SocialIdp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_attribute SocialIdp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_filter SocialIdp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#id SocialIdp#id}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchAttribute">matchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#match_attribute SocialIdp#match_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchType">matchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#match_type SocialIdp#match_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#max_clock_skew SocialIdp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#profile_master SocialIdp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#protocol_type SocialIdp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#provisioning_action SocialIdp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#status SocialIdp#status}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#subject_match_attribute SocialIdp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#subject_match_type SocialIdp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#suspended_action SocialIdp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#username_template SocialIdp#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#name SocialIdp#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#scopes SocialIdp#scopes}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#type SocialIdp#type}

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#account_link_action SocialIdp#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#account_link_group_include SocialIdp#account_link_group_include}.

---

##### `appleKid`<sup>Optional</sup> <a name="appleKid" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleKid"></a>

```java
public java.lang.String getAppleKid();
```

- *Type:* java.lang.String

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#apple_kid SocialIdp#apple_kid}

---

##### `applePrivateKey`<sup>Optional</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.applePrivateKey"></a>

```java
public java.lang.String getApplePrivateKey();
```

- *Type:* java.lang.String

The PKCS #8 encoded private key that you created for the client and downloaded from Apple.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#apple_private_key SocialIdp#apple_private_key}

---

##### `appleTeamId`<sup>Optional</sup> <a name="appleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleTeamId"></a>

```java
public java.lang.String getAppleTeamId();
```

- *Type:* java.lang.String

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#apple_team_id SocialIdp#apple_team_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#client_id SocialIdp#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#client_secret SocialIdp#client_secret}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#deprovisioned_action SocialIdp#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_action SocialIdp#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_assignment SocialIdp#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_attribute SocialIdp#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#groups_filter SocialIdp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#id SocialIdp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#issuer_mode SocialIdp#issuer_mode}

---

##### `matchAttribute`<sup>Optional</sup> <a name="matchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchAttribute"></a>

```java
public java.lang.String getMatchAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#match_attribute SocialIdp#match_attribute}.

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#match_type SocialIdp#match_type}.

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#max_clock_skew SocialIdp#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#profile_master SocialIdp#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#protocol_type SocialIdp#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#provisioning_action SocialIdp#provisioning_action}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#status SocialIdp#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#subject_match_attribute SocialIdp#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#subject_match_type SocialIdp#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#suspended_action SocialIdp#suspended_action}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/social_idp#username_template SocialIdp#username_template}.

---



