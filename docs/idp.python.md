# `okta_idp`

Refer to the Terraform Registory for docs: [`okta_idp`](https://www.terraform.io/docs/providers/okta/r/idp).

# `idp` Submodule <a name="`idp` Submodule" id="@cdktf/provider-okta.idp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Idp <a name="Idp" id="@cdktf/provider-okta.idp.Idp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/idp okta_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idp.Idp.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import idp

idp.Idp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization_binding: str,
  authorization_url: str,
  client_id: str,
  client_secret: str,
  issuer_url: str,
  jwks_binding: str,
  jwks_url: str,
  name: str,
  scopes: typing.List[str],
  token_binding: str,
  token_url: str,
  account_link_action: str = None,
  account_link_group_include: typing.List[str] = None,
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
  request_signature_algorithm: str = None,
  request_signature_scope: str = None,
  status: str = None,
  subject_match_attribute: str = None,
  subject_match_type: str = None,
  suspended_action: str = None,
  user_info_binding: str = None,
  user_info_url: str = None,
  username_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.authorizationBinding">authorization_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_binding Idp#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.authorizationUrl">authorization_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_url Idp#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_id Idp#client_id}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_secret Idp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.issuerUrl">issuer_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_url Idp#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.jwksBinding">jwks_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_binding Idp#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.jwksUrl">jwks_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_url Idp#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#scopes Idp#scopes}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.tokenBinding">token_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_binding Idp#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.tokenUrl">token_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_url Idp#token_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_action Idp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_group_include Idp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#deprovisioned_action Idp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_action Idp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_assignment Idp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_attribute Idp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_filter Idp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#id Idp#id}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#max_clock_skew Idp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#profile_master Idp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#protocol_type Idp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#provisioning_action Idp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#status Idp#status}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_attribute Idp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_type Idp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#suspended_action Idp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.userInfoBinding">user_info_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_binding Idp#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.userInfoUrl">user_info_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_url Idp#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#username_template Idp#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.authorizationBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_binding Idp#authorization_binding}.

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.authorizationUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_url Idp#authorization_url}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_id Idp#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_secret Idp#client_secret}.

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.issuerUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_url Idp#issuer_url}.

---

##### `jwks_binding`<sup>Required</sup> <a name="jwks_binding" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.jwksBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_binding Idp#jwks_binding}.

---

##### `jwks_url`<sup>Required</sup> <a name="jwks_url" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.jwksUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_url Idp#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.name"></a>

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#name Idp#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#scopes Idp#scopes}.

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.tokenBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_binding Idp#token_binding}.

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.tokenUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_url Idp#token_url}.

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.accountLinkAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_action Idp#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_group_include Idp#account_link_group_include}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.deprovisionedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#deprovisioned_action Idp#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_action Idp#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAssignment"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_assignment Idp#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_attribute Idp#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.groupsFilter"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_filter Idp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#id Idp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.issuerMode"></a>

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_mode Idp#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.maxClockSkew"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#max_clock_skew Idp#max_clock_skew}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.profileMaster"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#profile_master Idp#profile_master}.

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.protocolType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#protocol_type Idp#protocol_type}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.provisioningAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#provisioning_action Idp#provisioning_action}.

---

##### `request_signature_algorithm`<sup>Optional</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.requestSignatureAlgorithm"></a>

- *Type:* str

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#request_signature_algorithm Idp#request_signature_algorithm}

---

##### `request_signature_scope`<sup>Optional</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.requestSignatureScope"></a>

- *Type:* str

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#request_signature_scope Idp#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#status Idp#status}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_attribute Idp#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.subjectMatchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_type Idp#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.suspendedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#suspended_action Idp#suspended_action}.

---

##### `user_info_binding`<sup>Optional</sup> <a name="user_info_binding" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.userInfoBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_binding Idp#user_info_binding}.

---

##### `user_info_url`<sup>Optional</sup> <a name="user_info_url" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.userInfoUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_url Idp#user_info_url}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.usernameTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#username_template Idp#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetAccountLinkAction">reset_account_link_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetAccountLinkGroupInclude">reset_account_link_group_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetDeprovisionedAction">reset_deprovisioned_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAction">reset_groups_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAssignment">reset_groups_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAttribute">reset_groups_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsFilter">reset_groups_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetIssuerMode">reset_issuer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetMaxClockSkew">reset_max_clock_skew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProfileMaster">reset_profile_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProtocolType">reset_protocol_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProvisioningAction">reset_provisioning_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetRequestSignatureAlgorithm">reset_request_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetRequestSignatureScope">reset_request_signature_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSubjectMatchAttribute">reset_subject_match_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSubjectMatchType">reset_subject_match_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSuspendedAction">reset_suspended_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUserInfoBinding">reset_user_info_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUserInfoUrl">reset_user_info_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.idp.Idp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.idp.Idp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idp.Idp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idp.Idp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.idp.Idp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.idp.Idp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.idp.Idp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.idp.Idp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.idp.Idp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.idp.Idp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.idp.Idp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.idp.Idp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.idp.Idp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.idp.Idp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.idp.Idp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.idp.Idp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.idp.Idp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.idp.Idp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idp.Idp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_link_action` <a name="reset_account_link_action" id="@cdktf/provider-okta.idp.Idp.resetAccountLinkAction"></a>

```python
def reset_account_link_action() -> None
```

##### `reset_account_link_group_include` <a name="reset_account_link_group_include" id="@cdktf/provider-okta.idp.Idp.resetAccountLinkGroupInclude"></a>

```python
def reset_account_link_group_include() -> None
```

##### `reset_deprovisioned_action` <a name="reset_deprovisioned_action" id="@cdktf/provider-okta.idp.Idp.resetDeprovisionedAction"></a>

```python
def reset_deprovisioned_action() -> None
```

##### `reset_groups_action` <a name="reset_groups_action" id="@cdktf/provider-okta.idp.Idp.resetGroupsAction"></a>

```python
def reset_groups_action() -> None
```

##### `reset_groups_assignment` <a name="reset_groups_assignment" id="@cdktf/provider-okta.idp.Idp.resetGroupsAssignment"></a>

```python
def reset_groups_assignment() -> None
```

##### `reset_groups_attribute` <a name="reset_groups_attribute" id="@cdktf/provider-okta.idp.Idp.resetGroupsAttribute"></a>

```python
def reset_groups_attribute() -> None
```

##### `reset_groups_filter` <a name="reset_groups_filter" id="@cdktf/provider-okta.idp.Idp.resetGroupsFilter"></a>

```python
def reset_groups_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.idp.Idp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_mode` <a name="reset_issuer_mode" id="@cdktf/provider-okta.idp.Idp.resetIssuerMode"></a>

```python
def reset_issuer_mode() -> None
```

##### `reset_max_clock_skew` <a name="reset_max_clock_skew" id="@cdktf/provider-okta.idp.Idp.resetMaxClockSkew"></a>

```python
def reset_max_clock_skew() -> None
```

##### `reset_profile_master` <a name="reset_profile_master" id="@cdktf/provider-okta.idp.Idp.resetProfileMaster"></a>

```python
def reset_profile_master() -> None
```

##### `reset_protocol_type` <a name="reset_protocol_type" id="@cdktf/provider-okta.idp.Idp.resetProtocolType"></a>

```python
def reset_protocol_type() -> None
```

##### `reset_provisioning_action` <a name="reset_provisioning_action" id="@cdktf/provider-okta.idp.Idp.resetProvisioningAction"></a>

```python
def reset_provisioning_action() -> None
```

##### `reset_request_signature_algorithm` <a name="reset_request_signature_algorithm" id="@cdktf/provider-okta.idp.Idp.resetRequestSignatureAlgorithm"></a>

```python
def reset_request_signature_algorithm() -> None
```

##### `reset_request_signature_scope` <a name="reset_request_signature_scope" id="@cdktf/provider-okta.idp.Idp.resetRequestSignatureScope"></a>

```python
def reset_request_signature_scope() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.idp.Idp.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subject_match_attribute` <a name="reset_subject_match_attribute" id="@cdktf/provider-okta.idp.Idp.resetSubjectMatchAttribute"></a>

```python
def reset_subject_match_attribute() -> None
```

##### `reset_subject_match_type` <a name="reset_subject_match_type" id="@cdktf/provider-okta.idp.Idp.resetSubjectMatchType"></a>

```python
def reset_subject_match_type() -> None
```

##### `reset_suspended_action` <a name="reset_suspended_action" id="@cdktf/provider-okta.idp.Idp.resetSuspendedAction"></a>

```python
def reset_suspended_action() -> None
```

##### `reset_user_info_binding` <a name="reset_user_info_binding" id="@cdktf/provider-okta.idp.Idp.resetUserInfoBinding"></a>

```python
def reset_user_info_binding() -> None
```

##### `reset_user_info_url` <a name="reset_user_info_url" id="@cdktf/provider-okta.idp.Idp.resetUserInfoUrl"></a>

```python
def reset_user_info_url() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-okta.idp.Idp.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.idp.Idp.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import idp

idp.Idp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.idp.Idp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import idp

idp.Idp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.idp.Idp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import idp

idp.Idp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userTypeId">user_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkActionInput">account_link_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkGroupIncludeInput">account_link_group_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationBindingInput">authorization_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationUrlInput">authorization_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.deprovisionedActionInput">deprovisioned_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsActionInput">groups_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAssignmentInput">groups_assignment_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAttributeInput">groups_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsFilterInput">groups_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerModeInput">issuer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksBindingInput">jwks_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksUrlInput">jwks_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.maxClockSkewInput">max_clock_skew_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.profileMasterInput">profile_master_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.protocolTypeInput">protocol_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioningActionInput">provisioning_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithmInput">request_signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureScopeInput">request_signature_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchAttributeInput">subject_match_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchTypeInput">subject_match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.suspendedActionInput">suspended_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenBindingInput">token_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenUrlInput">token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoBindingInput">user_info_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoUrlInput">user_info_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationBinding">authorization_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAction">groups_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksBinding">jwks_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksUrl">jwks_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.suspendedAction">suspended_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenBinding">token_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoBinding">user_info_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoUrl">user_info_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idp.Idp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.idp.Idp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idp.Idp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.idp.Idp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.idp.Idp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.idp.Idp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.idp.Idp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idp.Idp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idp.Idp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idp.Idp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idp.Idp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idp.Idp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idp.Idp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idp.Idp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idp.Idp.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_type_id`<sup>Required</sup> <a name="user_type_id" id="@cdktf/provider-okta.idp.Idp.property.userTypeId"></a>

```python
user_type_id: str
```

- *Type:* str

---

##### `account_link_action_input`<sup>Optional</sup> <a name="account_link_action_input" id="@cdktf/provider-okta.idp.Idp.property.accountLinkActionInput"></a>

```python
account_link_action_input: str
```

- *Type:* str

---

##### `account_link_group_include_input`<sup>Optional</sup> <a name="account_link_group_include_input" id="@cdktf/provider-okta.idp.Idp.property.accountLinkGroupIncludeInput"></a>

```python
account_link_group_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_binding_input`<sup>Optional</sup> <a name="authorization_binding_input" id="@cdktf/provider-okta.idp.Idp.property.authorizationBindingInput"></a>

```python
authorization_binding_input: str
```

- *Type:* str

---

##### `authorization_url_input`<sup>Optional</sup> <a name="authorization_url_input" id="@cdktf/provider-okta.idp.Idp.property.authorizationUrlInput"></a>

```python
authorization_url_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-okta.idp.Idp.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-okta.idp.Idp.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `deprovisioned_action_input`<sup>Optional</sup> <a name="deprovisioned_action_input" id="@cdktf/provider-okta.idp.Idp.property.deprovisionedActionInput"></a>

```python
deprovisioned_action_input: str
```

- *Type:* str

---

##### `groups_action_input`<sup>Optional</sup> <a name="groups_action_input" id="@cdktf/provider-okta.idp.Idp.property.groupsActionInput"></a>

```python
groups_action_input: str
```

- *Type:* str

---

##### `groups_assignment_input`<sup>Optional</sup> <a name="groups_assignment_input" id="@cdktf/provider-okta.idp.Idp.property.groupsAssignmentInput"></a>

```python
groups_assignment_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute_input`<sup>Optional</sup> <a name="groups_attribute_input" id="@cdktf/provider-okta.idp.Idp.property.groupsAttributeInput"></a>

```python
groups_attribute_input: str
```

- *Type:* str

---

##### `groups_filter_input`<sup>Optional</sup> <a name="groups_filter_input" id="@cdktf/provider-okta.idp.Idp.property.groupsFilterInput"></a>

```python
groups_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.idp.Idp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_mode_input`<sup>Optional</sup> <a name="issuer_mode_input" id="@cdktf/provider-okta.idp.Idp.property.issuerModeInput"></a>

```python
issuer_mode_input: str
```

- *Type:* str

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="@cdktf/provider-okta.idp.Idp.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `jwks_binding_input`<sup>Optional</sup> <a name="jwks_binding_input" id="@cdktf/provider-okta.idp.Idp.property.jwksBindingInput"></a>

```python
jwks_binding_input: str
```

- *Type:* str

---

##### `jwks_url_input`<sup>Optional</sup> <a name="jwks_url_input" id="@cdktf/provider-okta.idp.Idp.property.jwksUrlInput"></a>

```python
jwks_url_input: str
```

- *Type:* str

---

##### `max_clock_skew_input`<sup>Optional</sup> <a name="max_clock_skew_input" id="@cdktf/provider-okta.idp.Idp.property.maxClockSkewInput"></a>

```python
max_clock_skew_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.idp.Idp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_master_input`<sup>Optional</sup> <a name="profile_master_input" id="@cdktf/provider-okta.idp.Idp.property.profileMasterInput"></a>

```python
profile_master_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_type_input`<sup>Optional</sup> <a name="protocol_type_input" id="@cdktf/provider-okta.idp.Idp.property.protocolTypeInput"></a>

```python
protocol_type_input: str
```

- *Type:* str

---

##### `provisioning_action_input`<sup>Optional</sup> <a name="provisioning_action_input" id="@cdktf/provider-okta.idp.Idp.property.provisioningActionInput"></a>

```python
provisioning_action_input: str
```

- *Type:* str

---

##### `request_signature_algorithm_input`<sup>Optional</sup> <a name="request_signature_algorithm_input" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithmInput"></a>

```python
request_signature_algorithm_input: str
```

- *Type:* str

---

##### `request_signature_scope_input`<sup>Optional</sup> <a name="request_signature_scope_input" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureScopeInput"></a>

```python
request_signature_scope_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-okta.idp.Idp.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.idp.Idp.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subject_match_attribute_input`<sup>Optional</sup> <a name="subject_match_attribute_input" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchAttributeInput"></a>

```python
subject_match_attribute_input: str
```

- *Type:* str

---

##### `subject_match_type_input`<sup>Optional</sup> <a name="subject_match_type_input" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchTypeInput"></a>

```python
subject_match_type_input: str
```

- *Type:* str

---

##### `suspended_action_input`<sup>Optional</sup> <a name="suspended_action_input" id="@cdktf/provider-okta.idp.Idp.property.suspendedActionInput"></a>

```python
suspended_action_input: str
```

- *Type:* str

---

##### `token_binding_input`<sup>Optional</sup> <a name="token_binding_input" id="@cdktf/provider-okta.idp.Idp.property.tokenBindingInput"></a>

```python
token_binding_input: str
```

- *Type:* str

---

##### `token_url_input`<sup>Optional</sup> <a name="token_url_input" id="@cdktf/provider-okta.idp.Idp.property.tokenUrlInput"></a>

```python
token_url_input: str
```

- *Type:* str

---

##### `user_info_binding_input`<sup>Optional</sup> <a name="user_info_binding_input" id="@cdktf/provider-okta.idp.Idp.property.userInfoBindingInput"></a>

```python
user_info_binding_input: str
```

- *Type:* str

---

##### `user_info_url_input`<sup>Optional</sup> <a name="user_info_url_input" id="@cdktf/provider-okta.idp.Idp.property.userInfoUrlInput"></a>

```python
user_info_url_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-okta.idp.Idp.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `account_link_action`<sup>Required</sup> <a name="account_link_action" id="@cdktf/provider-okta.idp.Idp.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

---

##### `account_link_group_include`<sup>Required</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idp.Idp.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.idp.Idp.property.authorizationBinding"></a>

```python
authorization_binding: str
```

- *Type:* str

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.idp.Idp.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.idp.Idp.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.idp.Idp.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `deprovisioned_action`<sup>Required</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idp.Idp.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

---

##### `groups_action`<sup>Required</sup> <a name="groups_action" id="@cdktf/provider-okta.idp.Idp.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

---

##### `groups_assignment`<sup>Required</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idp.Idp.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute`<sup>Required</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idp.Idp.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

---

##### `groups_filter`<sup>Required</sup> <a name="groups_filter" id="@cdktf/provider-okta.idp.Idp.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idp.Idp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idp.Idp.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-okta.idp.Idp.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `jwks_binding`<sup>Required</sup> <a name="jwks_binding" id="@cdktf/provider-okta.idp.Idp.property.jwksBinding"></a>

```python
jwks_binding: str
```

- *Type:* str

---

##### `jwks_url`<sup>Required</sup> <a name="jwks_url" id="@cdktf/provider-okta.idp.Idp.property.jwksUrl"></a>

```python
jwks_url: str
```

- *Type:* str

---

##### `max_clock_skew`<sup>Required</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idp.Idp.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idp.Idp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_master`<sup>Required</sup> <a name="profile_master" id="@cdktf/provider-okta.idp.Idp.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-okta.idp.Idp.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `provisioning_action`<sup>Required</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idp.Idp.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

---

##### `request_signature_algorithm`<sup>Required</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithm"></a>

```python
request_signature_algorithm: str
```

- *Type:* str

---

##### `request_signature_scope`<sup>Required</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureScope"></a>

```python
request_signature_scope: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idp.Idp.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idp.Idp.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_match_attribute`<sup>Required</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

---

##### `subject_match_type`<sup>Required</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

---

##### `suspended_action`<sup>Required</sup> <a name="suspended_action" id="@cdktf/provider-okta.idp.Idp.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.idp.Idp.property.tokenBinding"></a>

```python
token_binding: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.idp.Idp.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `user_info_binding`<sup>Required</sup> <a name="user_info_binding" id="@cdktf/provider-okta.idp.Idp.property.userInfoBinding"></a>

```python
user_info_binding: str
```

- *Type:* str

---

##### `user_info_url`<sup>Required</sup> <a name="user_info_url" id="@cdktf/provider-okta.idp.Idp.property.userInfoUrl"></a>

```python
user_info_url: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-okta.idp.Idp.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idp.Idp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdpConfig <a name="IdpConfig" id="@cdktf/provider-okta.idp.IdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idp.IdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import idp

idp.IdpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization_binding: str,
  authorization_url: str,
  client_id: str,
  client_secret: str,
  issuer_url: str,
  jwks_binding: str,
  jwks_url: str,
  name: str,
  scopes: typing.List[str],
  token_binding: str,
  token_url: str,
  account_link_action: str = None,
  account_link_group_include: typing.List[str] = None,
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
  request_signature_algorithm: str = None,
  request_signature_scope: str = None,
  status: str = None,
  subject_match_attribute: str = None,
  subject_match_type: str = None,
  suspended_action: str = None,
  user_info_binding: str = None,
  user_info_url: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.authorizationBinding">authorization_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_binding Idp#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_url Idp#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_id Idp#client_id}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_secret Idp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.issuerUrl">issuer_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_url Idp#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.jwksBinding">jwks_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_binding Idp#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.jwksUrl">jwks_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_url Idp#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#scopes Idp#scopes}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.tokenBinding">token_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_binding Idp#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.tokenUrl">token_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_url Idp#token_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_action Idp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_group_include Idp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#deprovisioned_action Idp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_action Idp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_assignment Idp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_attribute Idp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_filter Idp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#id Idp#id}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#max_clock_skew Idp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#profile_master Idp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#protocol_type Idp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#provisioning_action Idp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#status Idp#status}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_attribute Idp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_type Idp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#suspended_action Idp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.userInfoBinding">user_info_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_binding Idp#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.userInfoUrl">user_info_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_url Idp#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#username_template Idp#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idp.IdpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idp.IdpConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idp.IdpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idp.IdpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idp.IdpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idp.IdpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idp.IdpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.idp.IdpConfig.property.authorizationBinding"></a>

```python
authorization_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_binding Idp#authorization_binding}.

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.idp.IdpConfig.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_url Idp#authorization_url}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.idp.IdpConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_id Idp#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.idp.IdpConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_secret Idp#client_secret}.

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-okta.idp.IdpConfig.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_url Idp#issuer_url}.

---

##### `jwks_binding`<sup>Required</sup> <a name="jwks_binding" id="@cdktf/provider-okta.idp.IdpConfig.property.jwksBinding"></a>

```python
jwks_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_binding Idp#jwks_binding}.

---

##### `jwks_url`<sup>Required</sup> <a name="jwks_url" id="@cdktf/provider-okta.idp.IdpConfig.property.jwksUrl"></a>

```python
jwks_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_url Idp#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idp.IdpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#name Idp#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idp.IdpConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#scopes Idp#scopes}.

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.idp.IdpConfig.property.tokenBinding"></a>

```python
token_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_binding Idp#token_binding}.

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.idp.IdpConfig.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_url Idp#token_url}.

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.idp.IdpConfig.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_action Idp#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idp.IdpConfig.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_group_include Idp#account_link_group_include}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idp.IdpConfig.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#deprovisioned_action Idp#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_action Idp#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_assignment Idp#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_attribute Idp#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_filter Idp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idp.IdpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#id Idp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idp.IdpConfig.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_mode Idp#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idp.IdpConfig.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#max_clock_skew Idp#max_clock_skew}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.idp.IdpConfig.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#profile_master Idp#profile_master}.

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktf/provider-okta.idp.IdpConfig.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#protocol_type Idp#protocol_type}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idp.IdpConfig.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#provisioning_action Idp#provisioning_action}.

---

##### `request_signature_algorithm`<sup>Optional</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureAlgorithm"></a>

```python
request_signature_algorithm: str
```

- *Type:* str

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#request_signature_algorithm Idp#request_signature_algorithm}

---

##### `request_signature_scope`<sup>Optional</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureScope"></a>

```python
request_signature_scope: str
```

- *Type:* str

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#request_signature_scope Idp#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idp.IdpConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#status Idp#status}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_attribute Idp#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_type Idp#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.idp.IdpConfig.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#suspended_action Idp#suspended_action}.

---

##### `user_info_binding`<sup>Optional</sup> <a name="user_info_binding" id="@cdktf/provider-okta.idp.IdpConfig.property.userInfoBinding"></a>

```python
user_info_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_binding Idp#user_info_binding}.

---

##### `user_info_url`<sup>Optional</sup> <a name="user_info_url" id="@cdktf/provider-okta.idp.IdpConfig.property.userInfoUrl"></a>

```python
user_info_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_url Idp#user_info_url}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.idp.IdpConfig.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#username_template Idp#username_template}.

---



