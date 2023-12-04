# `idpSaml` Submodule <a name="`idpSaml` Submodule" id="@cdktf/provider-okta.idpSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSaml <a name="IdpSaml" id="@cdktf/provider-okta.idpSaml.IdpSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml okta_idp_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import idp_saml

idpSaml.IdpSaml(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issuer: str,
  kid: str,
  name: str,
  sso_url: str,
  account_link_action: str = None,
  account_link_group_include: typing.List[str] = None,
  acs_type: str = None,
  deprovisioned_action: str = None,
  groups_action: str = None,
  groups_assignment: typing.List[str] = None,
  groups_attribute: str = None,
  groups_filter: typing.List[str] = None,
  id: str = None,
  issuer_mode: str = None,
  max_clock_skew: typing.Union[int, float] = None,
  name_format: str = None,
  profile_master: typing.Union[bool, IResolvable] = None,
  provisioning_action: str = None,
  request_signature_algorithm: str = None,
  request_signature_scope: str = None,
  response_signature_algorithm: str = None,
  response_signature_scope: str = None,
  sso_binding: str = None,
  sso_destination: str = None,
  status: str = None,
  subject_filter: str = None,
  subject_format: typing.List[str] = None,
  subject_match_attribute: str = None,
  subject_match_type: str = None,
  suspended_action: str = None,
  username_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#issuer IdpSaml#issuer}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.kid">kid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#kid IdpSaml#kid}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoUrl">sso_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_url IdpSaml#sso_url}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.acsType">acs_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#acs_type IdpSaml#acs_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_action IdpSaml#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#id IdpSaml#id}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.nameFormat">name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#name_format IdpSaml#name_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#profile_master IdpSaml#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.responseSignatureAlgorithm">response_signature_algorithm</a></code> | <code>str</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.responseSignatureScope">response_signature_scope</a></code> | <code>str</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoBinding">sso_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoDestination">sso_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#status IdpSaml#status}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectFilter">subject_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectFormat">subject_format</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_format IdpSaml#subject_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#username_template IdpSaml#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#issuer IdpSaml#issuer}.

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.kid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#kid IdpSaml#kid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.name"></a>

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#name IdpSaml#name}

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_url IdpSaml#sso_url}.

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.accountLinkAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}.

---

##### `acs_type`<sup>Optional</sup> <a name="acs_type" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.acsType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#acs_type IdpSaml#acs_type}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.deprovisionedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_action IdpSaml#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAssignment"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.groupsFilter"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#id IdpSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.issuerMode"></a>

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#issuer_mode IdpSaml#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.maxClockSkew"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}.

---

##### `name_format`<sup>Optional</sup> <a name="name_format" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.nameFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#name_format IdpSaml#name_format}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.profileMaster"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#profile_master IdpSaml#profile_master}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.provisioningAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}.

---

##### `request_signature_algorithm`<sup>Optional</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.requestSignatureAlgorithm"></a>

- *Type:* str

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#request_signature_algorithm IdpSaml#request_signature_algorithm}

---

##### `request_signature_scope`<sup>Optional</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.requestSignatureScope"></a>

- *Type:* str

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#request_signature_scope IdpSaml#request_signature_scope}

---

##### `response_signature_algorithm`<sup>Optional</sup> <a name="response_signature_algorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.responseSignatureAlgorithm"></a>

- *Type:* str

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#response_signature_algorithm IdpSaml#response_signature_algorithm}

---

##### `response_signature_scope`<sup>Optional</sup> <a name="response_signature_scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.responseSignatureScope"></a>

- *Type:* str

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#response_signature_scope IdpSaml#response_signature_scope}

---

##### `sso_binding`<sup>Optional</sup> <a name="sso_binding" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}.

---

##### `sso_destination`<sup>Optional</sup> <a name="sso_destination" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.ssoDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#status IdpSaml#status}.

---

##### `subject_filter`<sup>Optional</sup> <a name="subject_filter" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}.

---

##### `subject_format`<sup>Optional</sup> <a name="subject_format" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectFormat"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_format IdpSaml#subject_format}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.subjectMatchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.suspendedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.usernameTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#username_template IdpSaml#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkAction">reset_account_link_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkGroupInclude">reset_account_link_group_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAcsType">reset_acs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetDeprovisionedAction">reset_deprovisioned_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAction">reset_groups_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAssignment">reset_groups_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAttribute">reset_groups_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsFilter">reset_groups_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetIssuerMode">reset_issuer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetMaxClockSkew">reset_max_clock_skew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetNameFormat">reset_name_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetProfileMaster">reset_profile_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetProvisioningAction">reset_provisioning_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureAlgorithm">reset_request_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureScope">reset_request_signature_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureAlgorithm">reset_response_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureScope">reset_response_signature_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoBinding">reset_sso_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoDestination">reset_sso_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFilter">reset_subject_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFormat">reset_subject_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchAttribute">reset_subject_match_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchType">reset_subject_match_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSuspendedAction">reset_suspended_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.idpSaml.IdpSaml.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.idpSaml.IdpSaml.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.idpSaml.IdpSaml.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.idpSaml.IdpSaml.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_link_action` <a name="reset_account_link_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkAction"></a>

```python
def reset_account_link_action() -> None
```

##### `reset_account_link_group_include` <a name="reset_account_link_group_include" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkGroupInclude"></a>

```python
def reset_account_link_group_include() -> None
```

##### `reset_acs_type` <a name="reset_acs_type" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAcsType"></a>

```python
def reset_acs_type() -> None
```

##### `reset_deprovisioned_action` <a name="reset_deprovisioned_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetDeprovisionedAction"></a>

```python
def reset_deprovisioned_action() -> None
```

##### `reset_groups_action` <a name="reset_groups_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAction"></a>

```python
def reset_groups_action() -> None
```

##### `reset_groups_assignment` <a name="reset_groups_assignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAssignment"></a>

```python
def reset_groups_assignment() -> None
```

##### `reset_groups_attribute` <a name="reset_groups_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAttribute"></a>

```python
def reset_groups_attribute() -> None
```

##### `reset_groups_filter` <a name="reset_groups_filter" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsFilter"></a>

```python
def reset_groups_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_mode` <a name="reset_issuer_mode" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetIssuerMode"></a>

```python
def reset_issuer_mode() -> None
```

##### `reset_max_clock_skew` <a name="reset_max_clock_skew" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetMaxClockSkew"></a>

```python
def reset_max_clock_skew() -> None
```

##### `reset_name_format` <a name="reset_name_format" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetNameFormat"></a>

```python
def reset_name_format() -> None
```

##### `reset_profile_master` <a name="reset_profile_master" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetProfileMaster"></a>

```python
def reset_profile_master() -> None
```

##### `reset_provisioning_action` <a name="reset_provisioning_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetProvisioningAction"></a>

```python
def reset_provisioning_action() -> None
```

##### `reset_request_signature_algorithm` <a name="reset_request_signature_algorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureAlgorithm"></a>

```python
def reset_request_signature_algorithm() -> None
```

##### `reset_request_signature_scope` <a name="reset_request_signature_scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureScope"></a>

```python
def reset_request_signature_scope() -> None
```

##### `reset_response_signature_algorithm` <a name="reset_response_signature_algorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureAlgorithm"></a>

```python
def reset_response_signature_algorithm() -> None
```

##### `reset_response_signature_scope` <a name="reset_response_signature_scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureScope"></a>

```python
def reset_response_signature_scope() -> None
```

##### `reset_sso_binding` <a name="reset_sso_binding" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoBinding"></a>

```python
def reset_sso_binding() -> None
```

##### `reset_sso_destination` <a name="reset_sso_destination" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoDestination"></a>

```python
def reset_sso_destination() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subject_filter` <a name="reset_subject_filter" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFilter"></a>

```python
def reset_subject_filter() -> None
```

##### `reset_subject_format` <a name="reset_subject_format" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFormat"></a>

```python
def reset_subject_format() -> None
```

##### `reset_subject_match_attribute` <a name="reset_subject_match_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchAttribute"></a>

```python
def reset_subject_match_attribute() -> None
```

##### `reset_subject_match_type` <a name="reset_subject_match_type" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchType"></a>

```python
def reset_subject_match_type() -> None
```

##### `reset_suspended_action` <a name="reset_suspended_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSuspendedAction"></a>

```python
def reset_suspended_action() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdpSaml resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import idp_saml

idpSaml.IdpSaml.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import idp_saml

idpSaml.IdpSaml.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import idp_saml

idpSaml.IdpSaml.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import idp_saml

idpSaml.IdpSaml.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdpSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdpSaml to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdpSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdpSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsBinding">acs_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.userTypeId">user_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkActionInput">account_link_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupIncludeInput">account_link_group_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsTypeInput">acs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedActionInput">deprovisioned_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsActionInput">groups_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignmentInput">groups_assignment_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttributeInput">groups_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilterInput">groups_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerModeInput">issuer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.kidInput">kid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkewInput">max_clock_skew_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormatInput">name_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMasterInput">profile_master_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningActionInput">provisioning_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithmInput">request_signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScopeInput">request_signature_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithmInput">response_signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScopeInput">response_signature_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBindingInput">sso_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestinationInput">sso_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrlInput">sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilterInput">subject_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormatInput">subject_format_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttributeInput">subject_match_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchTypeInput">subject_match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedActionInput">suspended_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsType">acs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAction">groups_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormat">name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithm">response_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScope">response_signature_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBinding">sso_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestination">sso_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilter">subject_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormat">subject_format</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedAction">suspended_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acs_binding`<sup>Required</sup> <a name="acs_binding" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsBinding"></a>

```python
acs_binding: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_type_id`<sup>Required</sup> <a name="user_type_id" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.userTypeId"></a>

```python
user_type_id: str
```

- *Type:* str

---

##### `account_link_action_input`<sup>Optional</sup> <a name="account_link_action_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkActionInput"></a>

```python
account_link_action_input: str
```

- *Type:* str

---

##### `account_link_group_include_input`<sup>Optional</sup> <a name="account_link_group_include_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupIncludeInput"></a>

```python
account_link_group_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `acs_type_input`<sup>Optional</sup> <a name="acs_type_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsTypeInput"></a>

```python
acs_type_input: str
```

- *Type:* str

---

##### `deprovisioned_action_input`<sup>Optional</sup> <a name="deprovisioned_action_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedActionInput"></a>

```python
deprovisioned_action_input: str
```

- *Type:* str

---

##### `groups_action_input`<sup>Optional</sup> <a name="groups_action_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsActionInput"></a>

```python
groups_action_input: str
```

- *Type:* str

---

##### `groups_assignment_input`<sup>Optional</sup> <a name="groups_assignment_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignmentInput"></a>

```python
groups_assignment_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute_input`<sup>Optional</sup> <a name="groups_attribute_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttributeInput"></a>

```python
groups_attribute_input: str
```

- *Type:* str

---

##### `groups_filter_input`<sup>Optional</sup> <a name="groups_filter_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilterInput"></a>

```python
groups_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `issuer_mode_input`<sup>Optional</sup> <a name="issuer_mode_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerModeInput"></a>

```python
issuer_mode_input: str
```

- *Type:* str

---

##### `kid_input`<sup>Optional</sup> <a name="kid_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.kidInput"></a>

```python
kid_input: str
```

- *Type:* str

---

##### `max_clock_skew_input`<sup>Optional</sup> <a name="max_clock_skew_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkewInput"></a>

```python
max_clock_skew_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_format_input`<sup>Optional</sup> <a name="name_format_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormatInput"></a>

```python
name_format_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_master_input`<sup>Optional</sup> <a name="profile_master_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMasterInput"></a>

```python
profile_master_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_action_input`<sup>Optional</sup> <a name="provisioning_action_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningActionInput"></a>

```python
provisioning_action_input: str
```

- *Type:* str

---

##### `request_signature_algorithm_input`<sup>Optional</sup> <a name="request_signature_algorithm_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithmInput"></a>

```python
request_signature_algorithm_input: str
```

- *Type:* str

---

##### `request_signature_scope_input`<sup>Optional</sup> <a name="request_signature_scope_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScopeInput"></a>

```python
request_signature_scope_input: str
```

- *Type:* str

---

##### `response_signature_algorithm_input`<sup>Optional</sup> <a name="response_signature_algorithm_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithmInput"></a>

```python
response_signature_algorithm_input: str
```

- *Type:* str

---

##### `response_signature_scope_input`<sup>Optional</sup> <a name="response_signature_scope_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScopeInput"></a>

```python
response_signature_scope_input: str
```

- *Type:* str

---

##### `sso_binding_input`<sup>Optional</sup> <a name="sso_binding_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBindingInput"></a>

```python
sso_binding_input: str
```

- *Type:* str

---

##### `sso_destination_input`<sup>Optional</sup> <a name="sso_destination_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestinationInput"></a>

```python
sso_destination_input: str
```

- *Type:* str

---

##### `sso_url_input`<sup>Optional</sup> <a name="sso_url_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrlInput"></a>

```python
sso_url_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subject_filter_input`<sup>Optional</sup> <a name="subject_filter_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilterInput"></a>

```python
subject_filter_input: str
```

- *Type:* str

---

##### `subject_format_input`<sup>Optional</sup> <a name="subject_format_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormatInput"></a>

```python
subject_format_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_match_attribute_input`<sup>Optional</sup> <a name="subject_match_attribute_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttributeInput"></a>

```python
subject_match_attribute_input: str
```

- *Type:* str

---

##### `subject_match_type_input`<sup>Optional</sup> <a name="subject_match_type_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchTypeInput"></a>

```python
subject_match_type_input: str
```

- *Type:* str

---

##### `suspended_action_input`<sup>Optional</sup> <a name="suspended_action_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedActionInput"></a>

```python
suspended_action_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `account_link_action`<sup>Required</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

---

##### `account_link_group_include`<sup>Required</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `acs_type`<sup>Required</sup> <a name="acs_type" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsType"></a>

```python
acs_type: str
```

- *Type:* str

---

##### `deprovisioned_action`<sup>Required</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

---

##### `groups_action`<sup>Required</sup> <a name="groups_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

---

##### `groups_assignment`<sup>Required</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute`<sup>Required</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

---

##### `groups_filter`<sup>Required</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `max_clock_skew`<sup>Required</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_format`<sup>Required</sup> <a name="name_format" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormat"></a>

```python
name_format: str
```

- *Type:* str

---

##### `profile_master`<sup>Required</sup> <a name="profile_master" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_action`<sup>Required</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

---

##### `request_signature_algorithm`<sup>Required</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithm"></a>

```python
request_signature_algorithm: str
```

- *Type:* str

---

##### `request_signature_scope`<sup>Required</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScope"></a>

```python
request_signature_scope: str
```

- *Type:* str

---

##### `response_signature_algorithm`<sup>Required</sup> <a name="response_signature_algorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithm"></a>

```python
response_signature_algorithm: str
```

- *Type:* str

---

##### `response_signature_scope`<sup>Required</sup> <a name="response_signature_scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScope"></a>

```python
response_signature_scope: str
```

- *Type:* str

---

##### `sso_binding`<sup>Required</sup> <a name="sso_binding" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBinding"></a>

```python
sso_binding: str
```

- *Type:* str

---

##### `sso_destination`<sup>Required</sup> <a name="sso_destination" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestination"></a>

```python
sso_destination: str
```

- *Type:* str

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_filter`<sup>Required</sup> <a name="subject_filter" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilter"></a>

```python
subject_filter: str
```

- *Type:* str

---

##### `subject_format`<sup>Required</sup> <a name="subject_format" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormat"></a>

```python
subject_format: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_match_attribute`<sup>Required</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

---

##### `subject_match_type`<sup>Required</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

---

##### `suspended_action`<sup>Required</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSamlConfig <a name="IdpSamlConfig" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import idp_saml

idpSaml.IdpSamlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issuer: str,
  kid: str,
  name: str,
  sso_url: str,
  account_link_action: str = None,
  account_link_group_include: typing.List[str] = None,
  acs_type: str = None,
  deprovisioned_action: str = None,
  groups_action: str = None,
  groups_assignment: typing.List[str] = None,
  groups_attribute: str = None,
  groups_filter: typing.List[str] = None,
  id: str = None,
  issuer_mode: str = None,
  max_clock_skew: typing.Union[int, float] = None,
  name_format: str = None,
  profile_master: typing.Union[bool, IResolvable] = None,
  provisioning_action: str = None,
  request_signature_algorithm: str = None,
  request_signature_scope: str = None,
  response_signature_algorithm: str = None,
  response_signature_scope: str = None,
  sso_binding: str = None,
  sso_destination: str = None,
  status: str = None,
  subject_filter: str = None,
  subject_format: typing.List[str] = None,
  subject_match_attribute: str = None,
  subject_match_type: str = None,
  suspended_action: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#issuer IdpSaml#issuer}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.kid">kid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#kid IdpSaml#kid}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoUrl">sso_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_url IdpSaml#sso_url}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.acsType">acs_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#acs_type IdpSaml#acs_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_action IdpSaml#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#id IdpSaml#id}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.nameFormat">name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#name_format IdpSaml#name_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#profile_master IdpSaml#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureAlgorithm">response_signature_algorithm</a></code> | <code>str</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureScope">response_signature_scope</a></code> | <code>str</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoBinding">sso_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoDestination">sso_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#status IdpSaml#status}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFilter">subject_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFormat">subject_format</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_format IdpSaml#subject_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#username_template IdpSaml#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#issuer IdpSaml#issuer}.

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.kid"></a>

```python
kid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#kid IdpSaml#kid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#name IdpSaml#name}

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_url IdpSaml#sso_url}.

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}.

---

##### `acs_type`<sup>Optional</sup> <a name="acs_type" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.acsType"></a>

```python
acs_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#acs_type IdpSaml#acs_type}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_action IdpSaml#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#id IdpSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#issuer_mode IdpSaml#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}.

---

##### `name_format`<sup>Optional</sup> <a name="name_format" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.nameFormat"></a>

```python
name_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#name_format IdpSaml#name_format}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#profile_master IdpSaml#profile_master}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}.

---

##### `request_signature_algorithm`<sup>Optional</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureAlgorithm"></a>

```python
request_signature_algorithm: str
```

- *Type:* str

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#request_signature_algorithm IdpSaml#request_signature_algorithm}

---

##### `request_signature_scope`<sup>Optional</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureScope"></a>

```python
request_signature_scope: str
```

- *Type:* str

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#request_signature_scope IdpSaml#request_signature_scope}

---

##### `response_signature_algorithm`<sup>Optional</sup> <a name="response_signature_algorithm" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureAlgorithm"></a>

```python
response_signature_algorithm: str
```

- *Type:* str

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#response_signature_algorithm IdpSaml#response_signature_algorithm}

---

##### `response_signature_scope`<sup>Optional</sup> <a name="response_signature_scope" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureScope"></a>

```python
response_signature_scope: str
```

- *Type:* str

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#response_signature_scope IdpSaml#response_signature_scope}

---

##### `sso_binding`<sup>Optional</sup> <a name="sso_binding" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoBinding"></a>

```python
sso_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}.

---

##### `sso_destination`<sup>Optional</sup> <a name="sso_destination" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoDestination"></a>

```python
sso_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#status IdpSaml#status}.

---

##### `subject_filter`<sup>Optional</sup> <a name="subject_filter" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFilter"></a>

```python
subject_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}.

---

##### `subject_format`<sup>Optional</sup> <a name="subject_format" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFormat"></a>

```python
subject_format: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_format IdpSaml#subject_format}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/idp_saml#username_template IdpSaml#username_template}.

---



