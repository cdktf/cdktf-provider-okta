# `idpSocial` Submodule <a name="`idpSocial` Submodule" id="@cdktf/provider-okta.idpSocial"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSocial <a name="IdpSocial" id="@cdktf/provider-okta.idpSocial.IdpSocial"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social okta_idp_social}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import idp_social

idpSocial.IdpSocial(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  scopes: typing.List[str],
  type: str,
  account_link_action: str = None,
  account_link_group_include: typing.List[str] = None,
  apple_kid: str = None,
  apple_private_key: str = None,
  apple_team_id: str = None,
  client_id: str = None,
  client_secret: str = None,
  deprovisioned_action: str = None,
  groups_action: str = None,
  groups_assignment: typing.List[str] = None,
  groups_attribute: str = None,
  groups_filter: typing.List[str] = None,
  id: str = None,
  issuer_mode: str = None,
  max_clock_skew: typing.Union[int, float] = None,
  profile_master: typing.Union[bool, IResolvable] = None,
  protocol_type: str = None,
  provisioning_action: str = None,
  status: str = None,
  subject_match_attribute: str = None,
  subject_match_type: str = None,
  suspended_action: str = None,
  username_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#scopes IdpSocial#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.type">type</a></code> | <code>str</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.appleKid">apple_kid</a></code> | <code>str</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.applePrivateKey">apple_private_key</a></code> | <code>str</code> | The PKCS #8 encoded private key that you created for the client and downloaded from Apple. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.appleTeamId">apple_team_id</a></code> | <code>str</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#client_id IdpSocial#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#client_secret IdpSocial#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_action IdpSocial#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#id IdpSocial#id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#profile_master IdpSocial#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#status IdpSocial#status}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#username_template IdpSocial#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.name"></a>

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#name IdpSocial#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#scopes IdpSocial#scopes}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.type"></a>

- *Type:* str

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#type IdpSocial#type}

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.accountLinkAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}.

---

##### `apple_kid`<sup>Optional</sup> <a name="apple_kid" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.appleKid"></a>

- *Type:* str

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#apple_kid IdpSocial#apple_kid}

---

##### `apple_private_key`<sup>Optional</sup> <a name="apple_private_key" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.applePrivateKey"></a>

- *Type:* str

The PKCS #8 encoded private key that you created for the client and downloaded from Apple.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#apple_private_key IdpSocial#apple_private_key}

---

##### `apple_team_id`<sup>Optional</sup> <a name="apple_team_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.appleTeamId"></a>

- *Type:* str

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#apple_team_id IdpSocial#apple_team_id}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#client_id IdpSocial#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#client_secret IdpSocial#client_secret}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.deprovisionedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_action IdpSocial#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAssignment"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.groupsFilter"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#id IdpSocial#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.issuerMode"></a>

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#issuer_mode IdpSocial#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.maxClockSkew"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.profileMaster"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#profile_master IdpSocial#profile_master}.

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.protocolType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.provisioningAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#status IdpSocial#status}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.subjectMatchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.suspendedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.usernameTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#username_template IdpSocial#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction">reset_account_link_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude">reset_account_link_group_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid">reset_apple_kid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey">reset_apple_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId">reset_apple_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction">reset_deprovisioned_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction">reset_groups_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment">reset_groups_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute">reset_groups_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter">reset_groups_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode">reset_issuer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew">reset_max_clock_skew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster">reset_profile_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType">reset_protocol_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction">reset_provisioning_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute">reset_subject_match_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType">reset_subject_match_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction">reset_suspended_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.idpSocial.IdpSocial.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.idpSocial.IdpSocial.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.idpSocial.IdpSocial.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_account_link_action` <a name="reset_account_link_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction"></a>

```python
def reset_account_link_action() -> None
```

##### `reset_account_link_group_include` <a name="reset_account_link_group_include" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude"></a>

```python
def reset_account_link_group_include() -> None
```

##### `reset_apple_kid` <a name="reset_apple_kid" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid"></a>

```python
def reset_apple_kid() -> None
```

##### `reset_apple_private_key` <a name="reset_apple_private_key" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey"></a>

```python
def reset_apple_private_key() -> None
```

##### `reset_apple_team_id` <a name="reset_apple_team_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId"></a>

```python
def reset_apple_team_id() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_deprovisioned_action` <a name="reset_deprovisioned_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction"></a>

```python
def reset_deprovisioned_action() -> None
```

##### `reset_groups_action` <a name="reset_groups_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction"></a>

```python
def reset_groups_action() -> None
```

##### `reset_groups_assignment` <a name="reset_groups_assignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment"></a>

```python
def reset_groups_assignment() -> None
```

##### `reset_groups_attribute` <a name="reset_groups_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute"></a>

```python
def reset_groups_attribute() -> None
```

##### `reset_groups_filter` <a name="reset_groups_filter" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter"></a>

```python
def reset_groups_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_mode` <a name="reset_issuer_mode" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode"></a>

```python
def reset_issuer_mode() -> None
```

##### `reset_max_clock_skew` <a name="reset_max_clock_skew" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew"></a>

```python
def reset_max_clock_skew() -> None
```

##### `reset_profile_master` <a name="reset_profile_master" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster"></a>

```python
def reset_profile_master() -> None
```

##### `reset_protocol_type` <a name="reset_protocol_type" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType"></a>

```python
def reset_protocol_type() -> None
```

##### `reset_provisioning_action` <a name="reset_provisioning_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction"></a>

```python
def reset_provisioning_action() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subject_match_attribute` <a name="reset_subject_match_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute"></a>

```python
def reset_subject_match_attribute() -> None
```

##### `reset_subject_match_type` <a name="reset_subject_match_type" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType"></a>

```python
def reset_subject_match_type() -> None
```

##### `reset_suspended_action` <a name="reset_suspended_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction"></a>

```python
def reset_suspended_action() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdpSocial resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import idp_social

idpSocial.IdpSocial.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import idp_social

idpSocial.IdpSocial.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import idp_social

idpSocial.IdpSocial.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import idp_social

idpSocial.IdpSocial.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdpSocial resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdpSocial to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdpSocial that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdpSocial to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding">authorization_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding">token_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput">account_link_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput">account_link_group_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput">apple_kid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput">apple_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput">apple_team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput">deprovisioned_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput">groups_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput">groups_assignment_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput">groups_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput">groups_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput">issuer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput">max_clock_skew_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput">profile_master_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput">protocol_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput">provisioning_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput">subject_match_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput">subject_match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput">suspended_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid">apple_kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey">apple_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId">apple_team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction">groups_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction">suspended_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding"></a>

```python
authorization_binding: str
```

- *Type:* str

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding"></a>

```python
token_binding: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `account_link_action_input`<sup>Optional</sup> <a name="account_link_action_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput"></a>

```python
account_link_action_input: str
```

- *Type:* str

---

##### `account_link_group_include_input`<sup>Optional</sup> <a name="account_link_group_include_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput"></a>

```python
account_link_group_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `apple_kid_input`<sup>Optional</sup> <a name="apple_kid_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput"></a>

```python
apple_kid_input: str
```

- *Type:* str

---

##### `apple_private_key_input`<sup>Optional</sup> <a name="apple_private_key_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput"></a>

```python
apple_private_key_input: str
```

- *Type:* str

---

##### `apple_team_id_input`<sup>Optional</sup> <a name="apple_team_id_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput"></a>

```python
apple_team_id_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `deprovisioned_action_input`<sup>Optional</sup> <a name="deprovisioned_action_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput"></a>

```python
deprovisioned_action_input: str
```

- *Type:* str

---

##### `groups_action_input`<sup>Optional</sup> <a name="groups_action_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput"></a>

```python
groups_action_input: str
```

- *Type:* str

---

##### `groups_assignment_input`<sup>Optional</sup> <a name="groups_assignment_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput"></a>

```python
groups_assignment_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute_input`<sup>Optional</sup> <a name="groups_attribute_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput"></a>

```python
groups_attribute_input: str
```

- *Type:* str

---

##### `groups_filter_input`<sup>Optional</sup> <a name="groups_filter_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput"></a>

```python
groups_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_mode_input`<sup>Optional</sup> <a name="issuer_mode_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput"></a>

```python
issuer_mode_input: str
```

- *Type:* str

---

##### `max_clock_skew_input`<sup>Optional</sup> <a name="max_clock_skew_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput"></a>

```python
max_clock_skew_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_master_input`<sup>Optional</sup> <a name="profile_master_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput"></a>

```python
profile_master_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_type_input`<sup>Optional</sup> <a name="protocol_type_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput"></a>

```python
protocol_type_input: str
```

- *Type:* str

---

##### `provisioning_action_input`<sup>Optional</sup> <a name="provisioning_action_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput"></a>

```python
provisioning_action_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subject_match_attribute_input`<sup>Optional</sup> <a name="subject_match_attribute_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput"></a>

```python
subject_match_attribute_input: str
```

- *Type:* str

---

##### `subject_match_type_input`<sup>Optional</sup> <a name="subject_match_type_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput"></a>

```python
subject_match_type_input: str
```

- *Type:* str

---

##### `suspended_action_input`<sup>Optional</sup> <a name="suspended_action_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput"></a>

```python
suspended_action_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `account_link_action`<sup>Required</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

---

##### `account_link_group_include`<sup>Required</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `apple_kid`<sup>Required</sup> <a name="apple_kid" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid"></a>

```python
apple_kid: str
```

- *Type:* str

---

##### `apple_private_key`<sup>Required</sup> <a name="apple_private_key" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey"></a>

```python
apple_private_key: str
```

- *Type:* str

---

##### `apple_team_id`<sup>Required</sup> <a name="apple_team_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId"></a>

```python
apple_team_id: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `deprovisioned_action`<sup>Required</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

---

##### `groups_action`<sup>Required</sup> <a name="groups_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

---

##### `groups_assignment`<sup>Required</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute`<sup>Required</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

---

##### `groups_filter`<sup>Required</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `max_clock_skew`<sup>Required</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_master`<sup>Required</sup> <a name="profile_master" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `provisioning_action`<sup>Required</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_match_attribute`<sup>Required</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

---

##### `subject_match_type`<sup>Required</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

---

##### `suspended_action`<sup>Required</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSocialConfig <a name="IdpSocialConfig" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import idp_social

idpSocial.IdpSocialConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  scopes: typing.List[str],
  type: str,
  account_link_action: str = None,
  account_link_group_include: typing.List[str] = None,
  apple_kid: str = None,
  apple_private_key: str = None,
  apple_team_id: str = None,
  client_id: str = None,
  client_secret: str = None,
  deprovisioned_action: str = None,
  groups_action: str = None,
  groups_assignment: typing.List[str] = None,
  groups_attribute: str = None,
  groups_filter: typing.List[str] = None,
  id: str = None,
  issuer_mode: str = None,
  max_clock_skew: typing.Union[int, float] = None,
  profile_master: typing.Union[bool, IResolvable] = None,
  protocol_type: str = None,
  provisioning_action: str = None,
  status: str = None,
  subject_match_attribute: str = None,
  subject_match_type: str = None,
  suspended_action: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#scopes IdpSocial#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type">type</a></code> | <code>str</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid">apple_kid</a></code> | <code>str</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey">apple_private_key</a></code> | <code>str</code> | The PKCS #8 encoded private key that you created for the client and downloaded from Apple. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId">apple_team_id</a></code> | <code>str</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#client_id IdpSocial#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#client_secret IdpSocial#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_action IdpSocial#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#id IdpSocial#id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#profile_master IdpSocial#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#status IdpSocial#status}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#username_template IdpSocial#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#name IdpSocial#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#scopes IdpSocial#scopes}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#type IdpSocial#type}

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}.

---

##### `apple_kid`<sup>Optional</sup> <a name="apple_kid" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid"></a>

```python
apple_kid: str
```

- *Type:* str

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#apple_kid IdpSocial#apple_kid}

---

##### `apple_private_key`<sup>Optional</sup> <a name="apple_private_key" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey"></a>

```python
apple_private_key: str
```

- *Type:* str

The PKCS #8 encoded private key that you created for the client and downloaded from Apple.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#apple_private_key IdpSocial#apple_private_key}

---

##### `apple_team_id`<sup>Optional</sup> <a name="apple_team_id" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId"></a>

```python
apple_team_id: str
```

- *Type:* str

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#apple_team_id IdpSocial#apple_team_id}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#client_id IdpSocial#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#client_secret IdpSocial#client_secret}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_action IdpSocial#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#id IdpSocial#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#issuer_mode IdpSocial#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#profile_master IdpSocial#profile_master}.

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#status IdpSocial#status}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/idp_social#username_template IdpSocial#username_template}.

---



