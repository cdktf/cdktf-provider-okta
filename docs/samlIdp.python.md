# `samlIdp` Submodule <a name="`samlIdp` Submodule" id="@cdktf/provider-okta.samlIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdp <a name="SamlIdp" id="@cdktf/provider-okta.samlIdp.SamlIdp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_idp okta_saml_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_idp

samlIdp.SamlIdp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
  acs_binding: str = None,
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
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer SamlIdp#issuer}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.kid">kid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#kid SamlIdp#kid}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.ssoUrl">sso_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_url SamlIdp#sso_url}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_action SamlIdp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_group_include SamlIdp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.acsBinding">acs_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_binding SamlIdp#acs_binding}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.acsType">acs_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_type SamlIdp#acs_type}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_action SamlIdp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_assignment SamlIdp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_attribute SamlIdp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_filter SamlIdp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#id SamlIdp#id}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#max_clock_skew SamlIdp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.nameFormat">name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name_format SamlIdp#name_format}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#profile_master SamlIdp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#provisioning_action SamlIdp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.responseSignatureAlgorithm">response_signature_algorithm</a></code> | <code>str</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.responseSignatureScope">response_signature_scope</a></code> | <code>str</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.ssoBinding">sso_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_binding SamlIdp#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.ssoDestination">sso_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_destination SamlIdp#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#status SamlIdp#status}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.subjectFilter">subject_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_filter SamlIdp#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.subjectFormat">subject_format</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_format SamlIdp#subject_format}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_type SamlIdp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#suspended_action SamlIdp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#username_template SamlIdp#username_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer SamlIdp#issuer}.

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.kid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#kid SamlIdp#kid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.name"></a>

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name SamlIdp#name}

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.ssoUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_url SamlIdp#sso_url}.

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.accountLinkAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_action SamlIdp#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.accountLinkGroupInclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_group_include SamlIdp#account_link_group_include}.

---

##### `acs_binding`<sup>Optional</sup> <a name="acs_binding" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.acsBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_binding SamlIdp#acs_binding}.

---

##### `acs_type`<sup>Optional</sup> <a name="acs_type" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.acsType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_type SamlIdp#acs_type}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.deprovisionedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.groupsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_action SamlIdp#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.groupsAssignment"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_assignment SamlIdp#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.groupsAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_attribute SamlIdp#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.groupsFilter"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_filter SamlIdp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#id SamlIdp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.issuerMode"></a>

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer_mode SamlIdp#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.maxClockSkew"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#max_clock_skew SamlIdp#max_clock_skew}.

---

##### `name_format`<sup>Optional</sup> <a name="name_format" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.nameFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name_format SamlIdp#name_format}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.profileMaster"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#profile_master SamlIdp#profile_master}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.provisioningAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#provisioning_action SamlIdp#provisioning_action}.

---

##### `request_signature_algorithm`<sup>Optional</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.requestSignatureAlgorithm"></a>

- *Type:* str

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#request_signature_algorithm SamlIdp#request_signature_algorithm}

---

##### `request_signature_scope`<sup>Optional</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.requestSignatureScope"></a>

- *Type:* str

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#request_signature_scope SamlIdp#request_signature_scope}

---

##### `response_signature_algorithm`<sup>Optional</sup> <a name="response_signature_algorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.responseSignatureAlgorithm"></a>

- *Type:* str

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#response_signature_algorithm SamlIdp#response_signature_algorithm}

---

##### `response_signature_scope`<sup>Optional</sup> <a name="response_signature_scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.responseSignatureScope"></a>

- *Type:* str

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#response_signature_scope SamlIdp#response_signature_scope}

---

##### `sso_binding`<sup>Optional</sup> <a name="sso_binding" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.ssoBinding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_binding SamlIdp#sso_binding}.

---

##### `sso_destination`<sup>Optional</sup> <a name="sso_destination" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.ssoDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_destination SamlIdp#sso_destination}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#status SamlIdp#status}.

---

##### `subject_filter`<sup>Optional</sup> <a name="subject_filter" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.subjectFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_filter SamlIdp#subject_filter}.

---

##### `subject_format`<sup>Optional</sup> <a name="subject_format" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.subjectFormat"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_format SamlIdp#subject_format}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.subjectMatchAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.subjectMatchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_type SamlIdp#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.suspendedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#suspended_action SamlIdp#suspended_action}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.usernameTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#username_template SamlIdp#username_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkAction">reset_account_link_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkGroupInclude">reset_account_link_group_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsBinding">reset_acs_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsType">reset_acs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetDeprovisionedAction">reset_deprovisioned_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAction">reset_groups_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAssignment">reset_groups_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAttribute">reset_groups_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsFilter">reset_groups_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetIssuerMode">reset_issuer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetMaxClockSkew">reset_max_clock_skew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetNameFormat">reset_name_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetProfileMaster">reset_profile_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetProvisioningAction">reset_provisioning_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureAlgorithm">reset_request_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureScope">reset_request_signature_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureAlgorithm">reset_response_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureScope">reset_response_signature_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoBinding">reset_sso_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoDestination">reset_sso_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFilter">reset_subject_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFormat">reset_subject_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchAttribute">reset_subject_match_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchType">reset_subject_match_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSuspendedAction">reset_suspended_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlIdp.SamlIdp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.samlIdp.SamlIdp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.samlIdp.SamlIdp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_link_action` <a name="reset_account_link_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkAction"></a>

```python
def reset_account_link_action() -> None
```

##### `reset_account_link_group_include` <a name="reset_account_link_group_include" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkGroupInclude"></a>

```python
def reset_account_link_group_include() -> None
```

##### `reset_acs_binding` <a name="reset_acs_binding" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsBinding"></a>

```python
def reset_acs_binding() -> None
```

##### `reset_acs_type` <a name="reset_acs_type" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsType"></a>

```python
def reset_acs_type() -> None
```

##### `reset_deprovisioned_action` <a name="reset_deprovisioned_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetDeprovisionedAction"></a>

```python
def reset_deprovisioned_action() -> None
```

##### `reset_groups_action` <a name="reset_groups_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAction"></a>

```python
def reset_groups_action() -> None
```

##### `reset_groups_assignment` <a name="reset_groups_assignment" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAssignment"></a>

```python
def reset_groups_assignment() -> None
```

##### `reset_groups_attribute` <a name="reset_groups_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAttribute"></a>

```python
def reset_groups_attribute() -> None
```

##### `reset_groups_filter` <a name="reset_groups_filter" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsFilter"></a>

```python
def reset_groups_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_mode` <a name="reset_issuer_mode" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetIssuerMode"></a>

```python
def reset_issuer_mode() -> None
```

##### `reset_max_clock_skew` <a name="reset_max_clock_skew" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetMaxClockSkew"></a>

```python
def reset_max_clock_skew() -> None
```

##### `reset_name_format` <a name="reset_name_format" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetNameFormat"></a>

```python
def reset_name_format() -> None
```

##### `reset_profile_master` <a name="reset_profile_master" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetProfileMaster"></a>

```python
def reset_profile_master() -> None
```

##### `reset_provisioning_action` <a name="reset_provisioning_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetProvisioningAction"></a>

```python
def reset_provisioning_action() -> None
```

##### `reset_request_signature_algorithm` <a name="reset_request_signature_algorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureAlgorithm"></a>

```python
def reset_request_signature_algorithm() -> None
```

##### `reset_request_signature_scope` <a name="reset_request_signature_scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureScope"></a>

```python
def reset_request_signature_scope() -> None
```

##### `reset_response_signature_algorithm` <a name="reset_response_signature_algorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureAlgorithm"></a>

```python
def reset_response_signature_algorithm() -> None
```

##### `reset_response_signature_scope` <a name="reset_response_signature_scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureScope"></a>

```python
def reset_response_signature_scope() -> None
```

##### `reset_sso_binding` <a name="reset_sso_binding" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoBinding"></a>

```python
def reset_sso_binding() -> None
```

##### `reset_sso_destination` <a name="reset_sso_destination" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoDestination"></a>

```python
def reset_sso_destination() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subject_filter` <a name="reset_subject_filter" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFilter"></a>

```python
def reset_subject_filter() -> None
```

##### `reset_subject_format` <a name="reset_subject_format" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFormat"></a>

```python
def reset_subject_format() -> None
```

##### `reset_subject_match_attribute` <a name="reset_subject_match_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchAttribute"></a>

```python
def reset_subject_match_attribute() -> None
```

##### `reset_subject_match_type` <a name="reset_subject_match_type" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchType"></a>

```python
def reset_subject_match_type() -> None
```

##### `reset_suspended_action` <a name="reset_suspended_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSuspendedAction"></a>

```python
def reset_suspended_action() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import saml_idp

samlIdp.SamlIdp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import saml_idp

samlIdp.SamlIdp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import saml_idp

samlIdp.SamlIdp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.userTypeId">user_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkActionInput">account_link_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupIncludeInput">account_link_group_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBindingInput">acs_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsTypeInput">acs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedActionInput">deprovisioned_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsActionInput">groups_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignmentInput">groups_assignment_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttributeInput">groups_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilterInput">groups_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerModeInput">issuer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.kidInput">kid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkewInput">max_clock_skew_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormatInput">name_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMasterInput">profile_master_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningActionInput">provisioning_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithmInput">request_signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScopeInput">request_signature_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithmInput">response_signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScopeInput">response_signature_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBindingInput">sso_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestinationInput">sso_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrlInput">sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilterInput">subject_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormatInput">subject_format_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttributeInput">subject_match_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchTypeInput">subject_match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedActionInput">suspended_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBinding">acs_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsType">acs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAction">groups_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormat">name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithm">response_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScope">response_signature_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBinding">sso_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestination">sso_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilter">subject_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormat">subject_format</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedAction">suspended_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_type_id`<sup>Required</sup> <a name="user_type_id" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.userTypeId"></a>

```python
user_type_id: str
```

- *Type:* str

---

##### `account_link_action_input`<sup>Optional</sup> <a name="account_link_action_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkActionInput"></a>

```python
account_link_action_input: str
```

- *Type:* str

---

##### `account_link_group_include_input`<sup>Optional</sup> <a name="account_link_group_include_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupIncludeInput"></a>

```python
account_link_group_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `acs_binding_input`<sup>Optional</sup> <a name="acs_binding_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBindingInput"></a>

```python
acs_binding_input: str
```

- *Type:* str

---

##### `acs_type_input`<sup>Optional</sup> <a name="acs_type_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsTypeInput"></a>

```python
acs_type_input: str
```

- *Type:* str

---

##### `deprovisioned_action_input`<sup>Optional</sup> <a name="deprovisioned_action_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedActionInput"></a>

```python
deprovisioned_action_input: str
```

- *Type:* str

---

##### `groups_action_input`<sup>Optional</sup> <a name="groups_action_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsActionInput"></a>

```python
groups_action_input: str
```

- *Type:* str

---

##### `groups_assignment_input`<sup>Optional</sup> <a name="groups_assignment_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignmentInput"></a>

```python
groups_assignment_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute_input`<sup>Optional</sup> <a name="groups_attribute_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttributeInput"></a>

```python
groups_attribute_input: str
```

- *Type:* str

---

##### `groups_filter_input`<sup>Optional</sup> <a name="groups_filter_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilterInput"></a>

```python
groups_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `issuer_mode_input`<sup>Optional</sup> <a name="issuer_mode_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerModeInput"></a>

```python
issuer_mode_input: str
```

- *Type:* str

---

##### `kid_input`<sup>Optional</sup> <a name="kid_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.kidInput"></a>

```python
kid_input: str
```

- *Type:* str

---

##### `max_clock_skew_input`<sup>Optional</sup> <a name="max_clock_skew_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkewInput"></a>

```python
max_clock_skew_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_format_input`<sup>Optional</sup> <a name="name_format_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormatInput"></a>

```python
name_format_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_master_input`<sup>Optional</sup> <a name="profile_master_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMasterInput"></a>

```python
profile_master_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_action_input`<sup>Optional</sup> <a name="provisioning_action_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningActionInput"></a>

```python
provisioning_action_input: str
```

- *Type:* str

---

##### `request_signature_algorithm_input`<sup>Optional</sup> <a name="request_signature_algorithm_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithmInput"></a>

```python
request_signature_algorithm_input: str
```

- *Type:* str

---

##### `request_signature_scope_input`<sup>Optional</sup> <a name="request_signature_scope_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScopeInput"></a>

```python
request_signature_scope_input: str
```

- *Type:* str

---

##### `response_signature_algorithm_input`<sup>Optional</sup> <a name="response_signature_algorithm_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithmInput"></a>

```python
response_signature_algorithm_input: str
```

- *Type:* str

---

##### `response_signature_scope_input`<sup>Optional</sup> <a name="response_signature_scope_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScopeInput"></a>

```python
response_signature_scope_input: str
```

- *Type:* str

---

##### `sso_binding_input`<sup>Optional</sup> <a name="sso_binding_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBindingInput"></a>

```python
sso_binding_input: str
```

- *Type:* str

---

##### `sso_destination_input`<sup>Optional</sup> <a name="sso_destination_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestinationInput"></a>

```python
sso_destination_input: str
```

- *Type:* str

---

##### `sso_url_input`<sup>Optional</sup> <a name="sso_url_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrlInput"></a>

```python
sso_url_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subject_filter_input`<sup>Optional</sup> <a name="subject_filter_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilterInput"></a>

```python
subject_filter_input: str
```

- *Type:* str

---

##### `subject_format_input`<sup>Optional</sup> <a name="subject_format_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormatInput"></a>

```python
subject_format_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_match_attribute_input`<sup>Optional</sup> <a name="subject_match_attribute_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttributeInput"></a>

```python
subject_match_attribute_input: str
```

- *Type:* str

---

##### `subject_match_type_input`<sup>Optional</sup> <a name="subject_match_type_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchTypeInput"></a>

```python
subject_match_type_input: str
```

- *Type:* str

---

##### `suspended_action_input`<sup>Optional</sup> <a name="suspended_action_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedActionInput"></a>

```python
suspended_action_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `account_link_action`<sup>Required</sup> <a name="account_link_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

---

##### `account_link_group_include`<sup>Required</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `acs_binding`<sup>Required</sup> <a name="acs_binding" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBinding"></a>

```python
acs_binding: str
```

- *Type:* str

---

##### `acs_type`<sup>Required</sup> <a name="acs_type" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsType"></a>

```python
acs_type: str
```

- *Type:* str

---

##### `deprovisioned_action`<sup>Required</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

---

##### `groups_action`<sup>Required</sup> <a name="groups_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

---

##### `groups_assignment`<sup>Required</sup> <a name="groups_assignment" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute`<sup>Required</sup> <a name="groups_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

---

##### `groups_filter`<sup>Required</sup> <a name="groups_filter" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `max_clock_skew`<sup>Required</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_format`<sup>Required</sup> <a name="name_format" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormat"></a>

```python
name_format: str
```

- *Type:* str

---

##### `profile_master`<sup>Required</sup> <a name="profile_master" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_action`<sup>Required</sup> <a name="provisioning_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

---

##### `request_signature_algorithm`<sup>Required</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithm"></a>

```python
request_signature_algorithm: str
```

- *Type:* str

---

##### `request_signature_scope`<sup>Required</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScope"></a>

```python
request_signature_scope: str
```

- *Type:* str

---

##### `response_signature_algorithm`<sup>Required</sup> <a name="response_signature_algorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithm"></a>

```python
response_signature_algorithm: str
```

- *Type:* str

---

##### `response_signature_scope`<sup>Required</sup> <a name="response_signature_scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScope"></a>

```python
response_signature_scope: str
```

- *Type:* str

---

##### `sso_binding`<sup>Required</sup> <a name="sso_binding" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBinding"></a>

```python
sso_binding: str
```

- *Type:* str

---

##### `sso_destination`<sup>Required</sup> <a name="sso_destination" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestination"></a>

```python
sso_destination: str
```

- *Type:* str

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_filter`<sup>Required</sup> <a name="subject_filter" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilter"></a>

```python
subject_filter: str
```

- *Type:* str

---

##### `subject_format`<sup>Required</sup> <a name="subject_format" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormat"></a>

```python
subject_format: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_match_attribute`<sup>Required</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

---

##### `subject_match_type`<sup>Required</sup> <a name="subject_match_type" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

---

##### `suspended_action`<sup>Required</sup> <a name="suspended_action" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpConfig <a name="SamlIdpConfig" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_idp

samlIdp.SamlIdpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
  acs_binding: str = None,
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
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer SamlIdp#issuer}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.kid">kid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#kid SamlIdp#kid}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.name">name</a></code> | <code>str</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoUrl">sso_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_url SamlIdp#sso_url}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_action SamlIdp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_group_include SamlIdp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsBinding">acs_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_binding SamlIdp#acs_binding}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsType">acs_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_type SamlIdp#acs_type}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAction">groups_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_action SamlIdp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_assignment SamlIdp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_attribute SamlIdp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_filter SamlIdp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#id SamlIdp#id}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuerMode">issuer_mode</a></code> | <code>str</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#max_clock_skew SamlIdp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.nameFormat">name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name_format SamlIdp#name_format}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.profileMaster">profile_master</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#profile_master SamlIdp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#provisioning_action SamlIdp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureAlgorithm">request_signature_algorithm</a></code> | <code>str</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureScope">request_signature_scope</a></code> | <code>str</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureAlgorithm">response_signature_algorithm</a></code> | <code>str</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureScope">response_signature_scope</a></code> | <code>str</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoBinding">sso_binding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_binding SamlIdp#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoDestination">sso_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_destination SamlIdp#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#status SamlIdp#status}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFilter">subject_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_filter SamlIdp#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFormat">subject_format</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_format SamlIdp#subject_format}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_type SamlIdp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.suspendedAction">suspended_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#suspended_action SamlIdp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.usernameTemplate">username_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#username_template SamlIdp#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer SamlIdp#issuer}.

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.kid"></a>

```python
kid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#kid SamlIdp#kid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name SamlIdp#name}

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_url SamlIdp#sso_url}.

---

##### `account_link_action`<sup>Optional</sup> <a name="account_link_action" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_action SamlIdp#account_link_action}.

---

##### `account_link_group_include`<sup>Optional</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_group_include SamlIdp#account_link_group_include}.

---

##### `acs_binding`<sup>Optional</sup> <a name="acs_binding" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsBinding"></a>

```python
acs_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_binding SamlIdp#acs_binding}.

---

##### `acs_type`<sup>Optional</sup> <a name="acs_type" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsType"></a>

```python
acs_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_type SamlIdp#acs_type}.

---

##### `deprovisioned_action`<sup>Optional</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}.

---

##### `groups_action`<sup>Optional</sup> <a name="groups_action" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_action SamlIdp#groups_action}.

---

##### `groups_assignment`<sup>Optional</sup> <a name="groups_assignment" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_assignment SamlIdp#groups_assignment}.

---

##### `groups_attribute`<sup>Optional</sup> <a name="groups_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_attribute SamlIdp#groups_attribute}.

---

##### `groups_filter`<sup>Optional</sup> <a name="groups_filter" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_filter SamlIdp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#id SamlIdp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer_mode SamlIdp#issuer_mode}

---

##### `max_clock_skew`<sup>Optional</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#max_clock_skew SamlIdp#max_clock_skew}.

---

##### `name_format`<sup>Optional</sup> <a name="name_format" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.nameFormat"></a>

```python
name_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name_format SamlIdp#name_format}.

---

##### `profile_master`<sup>Optional</sup> <a name="profile_master" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.profileMaster"></a>

```python
profile_master: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#profile_master SamlIdp#profile_master}.

---

##### `provisioning_action`<sup>Optional</sup> <a name="provisioning_action" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#provisioning_action SamlIdp#provisioning_action}.

---

##### `request_signature_algorithm`<sup>Optional</sup> <a name="request_signature_algorithm" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureAlgorithm"></a>

```python
request_signature_algorithm: str
```

- *Type:* str

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#request_signature_algorithm SamlIdp#request_signature_algorithm}

---

##### `request_signature_scope`<sup>Optional</sup> <a name="request_signature_scope" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureScope"></a>

```python
request_signature_scope: str
```

- *Type:* str

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#request_signature_scope SamlIdp#request_signature_scope}

---

##### `response_signature_algorithm`<sup>Optional</sup> <a name="response_signature_algorithm" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureAlgorithm"></a>

```python
response_signature_algorithm: str
```

- *Type:* str

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#response_signature_algorithm SamlIdp#response_signature_algorithm}

---

##### `response_signature_scope`<sup>Optional</sup> <a name="response_signature_scope" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureScope"></a>

```python
response_signature_scope: str
```

- *Type:* str

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#response_signature_scope SamlIdp#response_signature_scope}

---

##### `sso_binding`<sup>Optional</sup> <a name="sso_binding" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoBinding"></a>

```python
sso_binding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_binding SamlIdp#sso_binding}.

---

##### `sso_destination`<sup>Optional</sup> <a name="sso_destination" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoDestination"></a>

```python
sso_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_destination SamlIdp#sso_destination}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#status SamlIdp#status}.

---

##### `subject_filter`<sup>Optional</sup> <a name="subject_filter" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFilter"></a>

```python
subject_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_filter SamlIdp#subject_filter}.

---

##### `subject_format`<sup>Optional</sup> <a name="subject_format" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFormat"></a>

```python
subject_format: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_format SamlIdp#subject_format}.

---

##### `subject_match_attribute`<sup>Optional</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}.

---

##### `subject_match_type`<sup>Optional</sup> <a name="subject_match_type" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_type SamlIdp#subject_match_type}.

---

##### `suspended_action`<sup>Optional</sup> <a name="suspended_action" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#suspended_action SamlIdp#suspended_action}.

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#username_template SamlIdp#username_template}.

---



