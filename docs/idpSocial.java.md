# `idpSocial` Submodule <a name="`idpSocial` Submodule" id="@cdktf/provider-okta.idpSocial"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSocial <a name="IdpSocial" id="@cdktf/provider-okta.idpSocial.IdpSocial"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social okta_idp_social}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_social.IdpSocial;

IdpSocial.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The scopes of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Specifies the account linking action for an IdP user. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Group memberships to determine link candidates. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.appleKid">appleKid</a></code> | <code>java.lang.String</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.applePrivateKey">applePrivateKey</a></code> | <code>java.lang.String</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.appleTeamId">appleTeamId</a></code> | <code>java.lang.String</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Unique identifier issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Client secret issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | IdP user profile attribute name (case-insensitive) for an array value that contains group memberships. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#id IdpSocial#id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Maximum allowable clock-skew when processing messages from the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the IdP should act as a source of truth for user profile attributes. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.protocolType">protocolType</a></code> | <code>java.lang.String</code> | The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OAUTH2`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Provisioning action for an IdP user during authentication. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#name IdpSocial#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

The scopes of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#scopes IdpSocial#scopes}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#type IdpSocial#type}

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.accountLinkAction"></a>

- *Type:* java.lang.String

Specifies the account linking action for an IdP user. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* java.util.List<java.lang.String>

Group memberships to determine link candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}

---

##### `appleKid`<sup>Optional</sup> <a name="appleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.appleKid"></a>

- *Type:* java.lang.String

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#apple_kid IdpSocial#apple_kid}

---

##### `applePrivateKey`<sup>Optional</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.applePrivateKey"></a>

- *Type:* java.lang.String

The Key ID that you obtained from Apple when you created the private key for the client.

PrivateKey is required when resource is first created. For all consecutive updates, it can be empty/omitted and keeps the existing value if it is empty/omitted. PrivateKey isn't returned when importing this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#apple_private_key IdpSocial#apple_private_key}

---

##### `appleTeamId`<sup>Optional</sup> <a name="appleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.appleTeamId"></a>

- *Type:* java.lang.String

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#apple_team_id IdpSocial#apple_team_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Unique identifier issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#client_id IdpSocial#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Client secret issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#client_secret IdpSocial#client_secret}

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.deprovisionedAction"></a>

- *Type:* java.lang.String

Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAction"></a>

- *Type:* java.lang.String

Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#groups_action IdpSocial#groups_action}

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAssignment"></a>

- *Type:* java.util.List<java.lang.String>

List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAttribute"></a>

- *Type:* java.lang.String

IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsFilter"></a>

- *Type:* java.util.List<java.lang.String>

Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#id IdpSocial#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.issuerMode"></a>

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

It can be `ORG_URL` or `CUSTOM_URL`. Default: `ORG_URL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#issuer_mode IdpSocial#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.maxClockSkew"></a>

- *Type:* java.lang.Number

Maximum allowable clock-skew when processing messages from the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.profileMaster"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the IdP should act as a source of truth for user profile attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#profile_master IdpSocial#profile_master}

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.protocolType"></a>

- *Type:* java.lang.String

The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OAUTH2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provisioningAction"></a>

- *Type:* java.lang.String

Provisioning action for an IdP user during authentication. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#status IdpSocial#status}

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* java.lang.String

Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.subjectMatchType"></a>

- *Type:* java.lang.String

Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username.

By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.suspendedAction"></a>

- *Type:* java.lang.String

Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.usernameTemplate"></a>

- *Type:* java.lang.String

Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#username_template IdpSocial#username_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid">resetAppleKid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey">resetApplePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId">resetAppleTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.idpSocial.IdpSocial.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.idpSocial.IdpSocial.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.idpSocial.IdpSocial.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction"></a>

```java
public void resetAccountLinkAction()
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude"></a>

```java
public void resetAccountLinkGroupInclude()
```

##### `resetAppleKid` <a name="resetAppleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid"></a>

```java
public void resetAppleKid()
```

##### `resetApplePrivateKey` <a name="resetApplePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey"></a>

```java
public void resetApplePrivateKey()
```

##### `resetAppleTeamId` <a name="resetAppleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId"></a>

```java
public void resetAppleTeamId()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction"></a>

```java
public void resetDeprovisionedAction()
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction"></a>

```java
public void resetGroupsAction()
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment"></a>

```java
public void resetGroupsAssignment()
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute"></a>

```java
public void resetGroupsAttribute()
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter"></a>

```java
public void resetGroupsFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetId"></a>

```java
public void resetId()
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode"></a>

```java
public void resetIssuerMode()
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew"></a>

```java
public void resetMaxClockSkew()
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster"></a>

```java
public void resetProfileMaster()
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType"></a>

```java
public void resetProtocolType()
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction"></a>

```java
public void resetProvisioningAction()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute"></a>

```java
public void resetSubjectMatchAttribute()
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType"></a>

```java
public void resetSubjectMatchType()
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction"></a>

```java
public void resetSuspendedAction()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdpSocial resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_social.IdpSocial;

IdpSocial.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_social.IdpSocial;

IdpSocial.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_social.IdpSocial;

IdpSocial.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_social.IdpSocial;

IdpSocial.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdpSocial.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdpSocial resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdpSocial to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdpSocial that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdpSocial to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustAudience">trustAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustIssuer">trustIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustKid">trustKid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustRevocation">trustRevocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.trustRevocationCacheLifetime">trustRevocationCacheLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput">appleKidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput">applePrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput">appleTeamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput">groupsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput">groupsFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput">issuerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput">profileMasterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput">protocolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput">provisioningActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput">suspendedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid">appleKid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey">applePrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId">appleTeamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding"></a>

```java
public java.lang.String getAuthorizationBinding();
```

- *Type:* java.lang.String

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding"></a>

```java
public java.lang.String getTokenBinding();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `trustAudience`<sup>Required</sup> <a name="trustAudience" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustAudience"></a>

```java
public java.lang.String getTrustAudience();
```

- *Type:* java.lang.String

---

##### `trustIssuer`<sup>Required</sup> <a name="trustIssuer" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustIssuer"></a>

```java
public java.lang.String getTrustIssuer();
```

- *Type:* java.lang.String

---

##### `trustKid`<sup>Required</sup> <a name="trustKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustKid"></a>

```java
public java.lang.String getTrustKid();
```

- *Type:* java.lang.String

---

##### `trustRevocation`<sup>Required</sup> <a name="trustRevocation" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustRevocation"></a>

```java
public java.lang.String getTrustRevocation();
```

- *Type:* java.lang.String

---

##### `trustRevocationCacheLifetime`<sup>Required</sup> <a name="trustRevocationCacheLifetime" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.trustRevocationCacheLifetime"></a>

```java
public java.lang.Number getTrustRevocationCacheLifetime();
```

- *Type:* java.lang.Number

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput"></a>

```java
public java.lang.String getAccountLinkActionInput();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appleKidInput`<sup>Optional</sup> <a name="appleKidInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput"></a>

```java
public java.lang.String getAppleKidInput();
```

- *Type:* java.lang.String

---

##### `applePrivateKeyInput`<sup>Optional</sup> <a name="applePrivateKeyInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput"></a>

```java
public java.lang.String getApplePrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `appleTeamIdInput`<sup>Optional</sup> <a name="appleTeamIdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput"></a>

```java
public java.lang.String getAppleTeamIdInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput"></a>

```java
public java.lang.String getDeprovisionedActionInput();
```

- *Type:* java.lang.String

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput"></a>

```java
public java.lang.String getGroupsActionInput();
```

- *Type:* java.lang.String

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignmentInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput"></a>

```java
public java.lang.String getGroupsAttributeInput();
```

- *Type:* java.lang.String

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput"></a>

```java
public java.util.List<java.lang.String> getGroupsFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput"></a>

```java
public java.lang.String getIssuerModeInput();
```

- *Type:* java.lang.String

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput"></a>

```java
public java.lang.Number getMaxClockSkewInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput"></a>

```java
public java.lang.Object getProfileMasterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput"></a>

```java
public java.lang.String getProtocolTypeInput();
```

- *Type:* java.lang.String

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput"></a>

```java
public java.lang.String getProvisioningActionInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput"></a>

```java
public java.lang.String getSubjectMatchAttributeInput();
```

- *Type:* java.lang.String

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput"></a>

```java
public java.lang.String getSubjectMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput"></a>

```java
public java.lang.String getSuspendedActionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appleKid`<sup>Required</sup> <a name="appleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid"></a>

```java
public java.lang.String getAppleKid();
```

- *Type:* java.lang.String

---

##### `applePrivateKey`<sup>Required</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey"></a>

```java
public java.lang.String getApplePrivateKey();
```

- *Type:* java.lang.String

---

##### `appleTeamId`<sup>Required</sup> <a name="appleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId"></a>

```java
public java.lang.String getAppleTeamId();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSocialConfig <a name="IdpSocialConfig" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.idp_social.IdpSocialConfig;

IdpSocialConfig.builder()
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
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The scopes of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type">type</a></code> | <code>java.lang.String</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | Specifies the account linking action for an IdP user. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | Group memberships to determine link candidates. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid">appleKid</a></code> | <code>java.lang.String</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey">applePrivateKey</a></code> | <code>java.lang.String</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId">appleTeamId</a></code> | <code>java.lang.String</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Unique identifier issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Client secret issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | IdP user profile attribute name (case-insensitive) for an array value that contains group memberships. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#id IdpSocial#id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | Maximum allowable clock-skew when processing messages from the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster">profileMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the IdP should act as a source of truth for user profile attributes. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OAUTH2`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | Provisioning action for an IdP user during authentication. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status">status</a></code> | <code>java.lang.String</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#name IdpSocial#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The scopes of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#scopes IdpSocial#scopes}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#type IdpSocial#type}

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

Specifies the account linking action for an IdP user. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

Group memberships to determine link candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}

---

##### `appleKid`<sup>Optional</sup> <a name="appleKid" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid"></a>

```java
public java.lang.String getAppleKid();
```

- *Type:* java.lang.String

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#apple_kid IdpSocial#apple_kid}

---

##### `applePrivateKey`<sup>Optional</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey"></a>

```java
public java.lang.String getApplePrivateKey();
```

- *Type:* java.lang.String

The Key ID that you obtained from Apple when you created the private key for the client.

PrivateKey is required when resource is first created. For all consecutive updates, it can be empty/omitted and keeps the existing value if it is empty/omitted. PrivateKey isn't returned when importing this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#apple_private_key IdpSocial#apple_private_key}

---

##### `appleTeamId`<sup>Optional</sup> <a name="appleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId"></a>

```java
public java.lang.String getAppleTeamId();
```

- *Type:* java.lang.String

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#apple_team_id IdpSocial#apple_team_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Unique identifier issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#client_id IdpSocial#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Client secret issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#client_secret IdpSocial#client_secret}

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#groups_action IdpSocial#groups_action}

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#id IdpSocial#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

It can be `ORG_URL` or `CUSTOM_URL`. Default: `ORG_URL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#issuer_mode IdpSocial#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

Maximum allowable clock-skew when processing messages from the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster"></a>

```java
public java.lang.Object getProfileMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the IdP should act as a source of truth for user profile attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#profile_master IdpSocial#profile_master}

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OAUTH2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

Provisioning action for an IdP user during authentication. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#status IdpSocial#status}

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username.

By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/idp_social#username_template IdpSocial#username_template}

---



