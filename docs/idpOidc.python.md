# `idpOidc` Submodule <a name="`idpOidc` Submodule" id="@cdktf/provider-okta.idpOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpOidc <a name="IdpOidc" id="@cdktf/provider-okta.idpOidc.IdpOidc"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc okta_idp_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import idp_oidc

idpOidc.IdpOidc(
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
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.authorizationBinding">authorization_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.authorizationUrl">authorization_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.issuerUrl">issuer_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.jwksBinding">jwks_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.jwksUrl">jwks_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.tokenBinding">token_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.tokenUrl">token_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.userInfoBinding">user_info_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.userInfoUrl">user_info_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.authorizationBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}.

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.authorizationUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}.

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.issuerUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}.

---

##### `jwks_binding`<sup>Required</sup> <a name="jwks_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.jwksBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}.

---

##### `jwks_url`<sup>Required</sup> <a name="jwks_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.jwksUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.name"></a>

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#name IdpOidc#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}.

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.tokenBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}.

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.tokenUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}.

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.accountLinkAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.deprovisionedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAssignment"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.groupsFilter"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.issuerMode"></a>

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_mode IdpOidc#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.maxClockSkew"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.profileMaster"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}.

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.protocolType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.provisioningAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}.

---

##### `request_signature_algorithm`<sup>Optional</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.requestSignatureAlgorithm"></a>

- *Type:* str

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_algorithm IdpOidc#request_signature_algorithm}

---

##### `request_signature_scope`<sup>Optional</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.requestSignatureScope"></a>

- *Type:* str

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_scope IdpOidc#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.subjectMatchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.suspendedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}.

---

##### `user_info_binding`<sup>Optional</sup> <a name="user_info_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.userInfoBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}.

---

##### `user_info_url`<sup>Optional</sup> <a name="user_info_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.userInfoUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.usernameTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction">reset_account_link_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude">reset_account_link_group_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction">reset_deprovisioned_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction">reset_groups_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment">reset_groups_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute">reset_groups_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter">reset_groups_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode">reset_issuer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew">reset_max_clock_skew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster">reset_profile_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType">reset_protocol_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction">reset_provisioning_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm">reset_request_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope">reset_request_signature_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute">reset_subject_match_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType">reset_subject_match_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction">reset_suspended_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding">reset_user_info_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl">reset_user_info_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.idpOidc.IdpOidc.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_link_action` <a name="reset_account_link_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction"></a>

```python
def reset_account_link_action() -> None
```

##### `reset_account_link_group_include` <a name="reset_account_link_group_include" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude"></a>

```python
def reset_account_link_group_include() -> None
```

##### `reset_deprovisioned_action` <a name="reset_deprovisioned_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction"></a>

```python
def reset_deprovisioned_action() -> None
```

##### `reset_groups_action` <a name="reset_groups_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction"></a>

```python
def reset_groups_action() -> None
```

##### `reset_groups_assignment` <a name="reset_groups_assignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment"></a>

```python
def reset_groups_assignment() -> None
```

##### `reset_groups_attribute` <a name="reset_groups_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute"></a>

```python
def reset_groups_attribute() -> None
```

##### `reset_groups_filter` <a name="reset_groups_filter" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter"></a>

```python
def reset_groups_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_mode` <a name="reset_issuer_mode" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode"></a>

```python
def reset_issuer_mode() -> None
```

##### `reset_max_clock_skew` <a name="reset_max_clock_skew" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew"></a>

```python
def reset_max_clock_skew() -> None
```

##### `reset_profile_master` <a name="reset_profile_master" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster"></a>

```python
def reset_profile_master() -> None
```

##### `reset_protocol_type` <a name="reset_protocol_type" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType"></a>

```python
def reset_protocol_type() -> None
```

##### `reset_provisioning_action` <a name="reset_provisioning_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction"></a>

```python
def reset_provisioning_action() -> None
```

##### `reset_request_signature_algorithm` <a name="reset_request_signature_algorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm"></a>

```python
def reset_request_signature_algorithm() -> None
```

##### `reset_request_signature_scope` <a name="reset_request_signature_scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope"></a>

```python
def reset_request_signature_scope() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subject_match_attribute` <a name="reset_subject_match_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute"></a>

```python
def reset_subject_match_attribute() -> None
```

##### `reset_subject_match_type` <a name="reset_subject_match_type" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType"></a>

```python
def reset_subject_match_type() -> None
```

##### `reset_suspended_action` <a name="reset_suspended_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction"></a>

```python
def reset_suspended_action() -> None
```

##### `reset_user_info_binding` <a name="reset_user_info_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding"></a>

```python
def reset_user_info_binding() -> None
```

##### `reset_user_info_url` <a name="reset_user_info_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl"></a>

```python
def reset_user_info_url() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import idp_oidc

idpOidc.IdpOidc.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import idp_oidc

idpOidc.IdpOidc.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import idp_oidc

idpOidc.IdpOidc.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId">user_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput">account_link_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput">account_link_group_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput">authorization_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput">authorization_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput">deprovisioned_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput">groups_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput">groups_assignment_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput">groups_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput">groups_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput">issuer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput">jwks_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput">jwks_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput">max_clock_skew_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput">profile_master_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput">protocol_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput">provisioning_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput">request_signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput">request_signature_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput">subject_match_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput">subject_match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput">suspended_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput">token_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput">token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput">user_info_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput">user_info_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding">authorization_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction">groups_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding">jwks_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl">jwks_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction">suspended_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding">token_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding">user_info_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl">user_info_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_type_id`<sup>Required</sup> <a name="user_type_id" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId"></a>

```python
user_type_id: str
```

- *Type:* str

---

##### `account_link_action_input`<sup>Optional</sup> <a name="account_link_action_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput"></a>

```python
account_link_action_input: str
```

- *Type:* str

---

##### `account_link_group_include_input`<sup>Optional</sup> <a name="account_link_group_include_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput"></a>

```python
account_link_group_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_binding_input`<sup>Optional</sup> <a name="authorization_binding_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput"></a>

```python
authorization_binding_input: str
```

- *Type:* str

---

##### `authorization_url_input`<sup>Optional</sup> <a name="authorization_url_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput"></a>

```python
authorization_url_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `deprovisioned_action_input`<sup>Optional</sup> <a name="deprovisioned_action_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput"></a>

```python
deprovisioned_action_input: str
```

- *Type:* str

---

##### `groups_action_input`<sup>Optional</sup> <a name="groups_action_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput"></a>

```python
groups_action_input: str
```

- *Type:* str

---

##### `groups_assignment_input`<sup>Optional</sup> <a name="groups_assignment_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput"></a>

```python
groups_assignment_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute_input`<sup>Optional</sup> <a name="groups_attribute_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput"></a>

```python
groups_attribute_input: str
```

- *Type:* str

---

##### `groups_filter_input`<sup>Optional</sup> <a name="groups_filter_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput"></a>

```python
groups_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_mode_input`<sup>Optional</sup> <a name="issuer_mode_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput"></a>

```python
issuer_mode_input: str
```

- *Type:* str

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `jwks_binding_input`<sup>Optional</sup> <a name="jwks_binding_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput"></a>

```python
jwks_binding_input: str
```

- *Type:* str

---

##### `jwks_url_input`<sup>Optional</sup> <a name="jwks_url_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput"></a>

```python
jwks_url_input: str
```

- *Type:* str

---

##### `max_clock_skew_input`<sup>Optional</sup> <a name="max_clock_skew_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput"></a>

```python
max_clock_skew_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_master_input`<sup>Optional</sup> <a name="profile_master_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput"></a>

```python
profile_master_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_type_input`<sup>Optional</sup> <a name="protocol_type_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput"></a>

```python
protocol_type_input: str
```

- *Type:* str

---

##### `provisioning_action_input`<sup>Optional</sup> <a name="provisioning_action_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput"></a>

```python
provisioning_action_input: str
```

- *Type:* str

---

##### `request_signature_algorithm_input`<sup>Optional</sup> <a name="request_signature_algorithm_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput"></a>

```python
request_signature_algorithm_input: str
```

- *Type:* str

---

##### `request_signature_scope_input`<sup>Optional</sup> <a name="request_signature_scope_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput"></a>

```python
request_signature_scope_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subject_match_attribute_input`<sup>Optional</sup> <a name="subject_match_attribute_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput"></a>

```python
subject_match_attribute_input: str
```

- *Type:* str

---

##### `subject_match_type_input`<sup>Optional</sup> <a name="subject_match_type_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput"></a>

```python
subject_match_type_input: str
```

- *Type:* str

---

##### `suspended_action_input`<sup>Optional</sup> <a name="suspended_action_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput"></a>

```python
suspended_action_input: str
```

- *Type:* str

---

##### `token_binding_input`<sup>Optional</sup> <a name="token_binding_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput"></a>

```python
token_binding_input: str
```

- *Type:* str

---

##### `token_url_input`<sup>Optional</sup> <a name="token_url_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput"></a>

```python
token_url_input: str
```

- *Type:* str

---

##### `user_info_binding_input`<sup>Optional</sup> <a name="user_info_binding_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput"></a>

```python
user_info_binding_input: str
```

- *Type:* str

---

##### `user_info_url_input`<sup>Optional</sup> <a name="user_info_url_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput"></a>

```python
user_info_url_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `account_link_action`<sup>Required</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

---

##### `account_link_group_include`<sup>Required</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding"></a>

```python
authorization_binding: str
```

- *Type:* str

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `deprovisioned_action`<sup>Required</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

---

##### `groups_action`<sup>Required</sup> <a name="groups_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

---

##### `groups_assignment`<sup>Required</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute`<sup>Required</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

---

##### `groups_filter`<sup>Required</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `jwks_binding`<sup>Required</sup> <a name="jwks_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding"></a>

```python
jwks_binding: str
```

- *Type:* str

---

##### `jwks_url`<sup>Required</sup> <a name="jwks_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl"></a>

```python
jwks_url: str
```

- *Type:* str

---

##### `max_clock_skew`<sup>Required</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_master`<sup>Required</sup> <a name="profile_master" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `provisioning_action`<sup>Required</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

---

##### `request_signature_algorithm`<sup>Required</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm"></a>

```python
request_signature_algorithm: str
```

- *Type:* str

---

##### `request_signature_scope`<sup>Required</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope"></a>

```python
request_signature_scope: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_match_attribute`<sup>Required</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

---

##### `subject_match_type`<sup>Required</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

---

##### `suspended_action`<sup>Required</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding"></a>

```python
token_binding: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `user_info_binding`<sup>Required</sup> <a name="user_info_binding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding"></a>

```python
user_info_binding: str
```

- *Type:* str

---

##### `user_info_url`<sup>Required</sup> <a name="user_info_url" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl"></a>

```python
user_info_url: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdpOidcConfig <a name="IdpOidcConfig" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import idp_oidc

idpOidc.IdpOidcConfig(
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
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding">authorization_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl">issuer_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding">jwks_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl">jwks_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding">token_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl">token_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding">user_info_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl">user_info_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding"></a>

```python
authorization_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}.

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}.

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}.

---

##### `jwks_binding`<sup>Required</sup> <a name="jwks_binding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding"></a>

```python
jwks_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}.

---

##### `jwks_url`<sup>Required</sup> <a name="jwks_url" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl"></a>

```python
jwks_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#name IdpOidc#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}.

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding"></a>

```python
token_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}.

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}.

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_mode IdpOidc#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}.

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}.

---

##### `request_signature_algorithm`<sup>Optional</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm"></a>

```python
request_signature_algorithm: str
```

- *Type:* str

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_algorithm IdpOidc#request_signature_algorithm}

---

##### `request_signature_scope`<sup>Optional</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope"></a>

```python
request_signature_scope: str
```

- *Type:* str

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_scope IdpOidc#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}.

---

##### `user_info_binding`<sup>Optional</sup> <a name="user_info_binding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding"></a>

```python
user_info_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}.

---

##### `user_info_url`<sup>Optional</sup> <a name="user_info_url" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl"></a>

```python
user_info_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}.

---



