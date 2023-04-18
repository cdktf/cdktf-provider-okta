# `okta_mfa_policy`

Refer to the Terraform Registory for docs: [`okta_mfa_policy`](https://www.terraform.io/docs/providers/okta/r/mfa_policy).

# `mfaPolicy` Submodule <a name="`mfaPolicy` Submodule" id="@cdktf/provider-okta.mfaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPolicy <a name="MfaPolicy" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy okta_mfa_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import mfa_policy

mfaPolicy.MfaPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  duo: typing.Mapping[str] = None,
  external_idp: typing.Mapping[str] = None,
  fido_u2_f: typing.Mapping[str] = None,
  fido_webauthn: typing.Mapping[str] = None,
  google_otp: typing.Mapping[str] = None,
  groups_included: typing.List[str] = None,
  hotp: typing.Mapping[str] = None,
  id: str = None,
  is_oie: typing.Union[bool, IResolvable] = None,
  okta_call: typing.Mapping[str] = None,
  okta_email: typing.Mapping[str] = None,
  okta_otp: typing.Mapping[str] = None,
  okta_password: typing.Mapping[str] = None,
  okta_push: typing.Mapping[str] = None,
  okta_question: typing.Mapping[str] = None,
  okta_sms: typing.Mapping[str] = None,
  okta_verify: typing.Mapping[str] = None,
  onprem_mfa: typing.Mapping[str] = None,
  phone_number: typing.Mapping[str] = None,
  priority: typing.Union[int, float] = None,
  rsa_token: typing.Mapping[str] = None,
  security_question: typing.Mapping[str] = None,
  status: str = None,
  symantec_vip: typing.Mapping[str] = None,
  webauthn: typing.Mapping[str] = None,
  yubikey_token: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.duo">duo</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.externalIdp">external_idp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.fidoU2F">fido_u2_f</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.fidoWebauthn">fido_webauthn</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.googleOtp">google_otp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.hotp">hotp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.isOie">is_oie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaCall">okta_call</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaEmail">okta_email</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaOtp">okta_otp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaPassword">okta_password</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaPush">okta_push</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaQuestion">okta_question</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaSms">okta_sms</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaVerify">okta_verify</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.onpremMfa">onprem_mfa</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.phoneNumber">phone_number</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.rsaToken">rsa_token</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.securityQuestion">security_question</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.symantecVip">symantec_vip</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.webauthn">webauthn</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.yubikeyToken">yubikey_token</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.name"></a>

- *Type:* str

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#name MfaPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.description"></a>

- *Type:* str

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#description MfaPolicy#description}

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.duo"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}.

---

##### `external_idp`<sup>Optional</sup> <a name="external_idp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.externalIdp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}.

---

##### `fido_u2_f`<sup>Optional</sup> <a name="fido_u2_f" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.fidoU2F"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}.

---

##### `fido_webauthn`<sup>Optional</sup> <a name="fido_webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.fidoWebauthn"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}.

---

##### `google_otp`<sup>Optional</sup> <a name="google_otp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.googleOtp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}.

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.groupsIncluded"></a>

- *Type:* typing.List[str]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#groups_included MfaPolicy#groups_included}

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.hotp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_oie`<sup>Optional</sup> <a name="is_oie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.isOie"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#is_oie MfaPolicy#is_oie}

---

##### `okta_call`<sup>Optional</sup> <a name="okta_call" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaCall"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}.

---

##### `okta_email`<sup>Optional</sup> <a name="okta_email" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaEmail"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}.

---

##### `okta_otp`<sup>Optional</sup> <a name="okta_otp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaOtp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}.

---

##### `okta_password`<sup>Optional</sup> <a name="okta_password" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaPassword"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}.

---

##### `okta_push`<sup>Optional</sup> <a name="okta_push" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaPush"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}.

---

##### `okta_question`<sup>Optional</sup> <a name="okta_question" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaQuestion"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}.

---

##### `okta_sms`<sup>Optional</sup> <a name="okta_sms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaSms"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}.

---

##### `okta_verify`<sup>Optional</sup> <a name="okta_verify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaVerify"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}.

---

##### `onprem_mfa`<sup>Optional</sup> <a name="onprem_mfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.onpremMfa"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.phoneNumber"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#priority MfaPolicy#priority}

---

##### `rsa_token`<sup>Optional</sup> <a name="rsa_token" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.rsaToken"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}.

---

##### `security_question`<sup>Optional</sup> <a name="security_question" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.securityQuestion"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.status"></a>

- *Type:* str

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#status MfaPolicy#status}

---

##### `symantec_vip`<sup>Optional</sup> <a name="symantec_vip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.symantecVip"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.webauthn"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}.

---

##### `yubikey_token`<sup>Optional</sup> <a name="yubikey_token" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.yubikeyToken"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo">reset_duo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp">reset_external_idp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F">reset_fido_u2_f</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn">reset_fido_webauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp">reset_google_otp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded">reset_groups_included</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp">reset_hotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie">reset_is_oie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall">reset_okta_call</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail">reset_okta_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp">reset_okta_otp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword">reset_okta_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush">reset_okta_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion">reset_okta_question</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms">reset_okta_sms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify">reset_okta_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa">reset_onprem_mfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken">reset_rsa_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion">reset_security_question</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip">reset_symantec_vip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn">reset_webauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken">reset_yubikey_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_duo` <a name="reset_duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo"></a>

```python
def reset_duo() -> None
```

##### `reset_external_idp` <a name="reset_external_idp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp"></a>

```python
def reset_external_idp() -> None
```

##### `reset_fido_u2_f` <a name="reset_fido_u2_f" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F"></a>

```python
def reset_fido_u2_f() -> None
```

##### `reset_fido_webauthn` <a name="reset_fido_webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn"></a>

```python
def reset_fido_webauthn() -> None
```

##### `reset_google_otp` <a name="reset_google_otp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp"></a>

```python
def reset_google_otp() -> None
```

##### `reset_groups_included` <a name="reset_groups_included" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded"></a>

```python
def reset_groups_included() -> None
```

##### `reset_hotp` <a name="reset_hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp"></a>

```python
def reset_hotp() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_oie` <a name="reset_is_oie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie"></a>

```python
def reset_is_oie() -> None
```

##### `reset_okta_call` <a name="reset_okta_call" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall"></a>

```python
def reset_okta_call() -> None
```

##### `reset_okta_email` <a name="reset_okta_email" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail"></a>

```python
def reset_okta_email() -> None
```

##### `reset_okta_otp` <a name="reset_okta_otp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp"></a>

```python
def reset_okta_otp() -> None
```

##### `reset_okta_password` <a name="reset_okta_password" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword"></a>

```python
def reset_okta_password() -> None
```

##### `reset_okta_push` <a name="reset_okta_push" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush"></a>

```python
def reset_okta_push() -> None
```

##### `reset_okta_question` <a name="reset_okta_question" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion"></a>

```python
def reset_okta_question() -> None
```

##### `reset_okta_sms` <a name="reset_okta_sms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms"></a>

```python
def reset_okta_sms() -> None
```

##### `reset_okta_verify` <a name="reset_okta_verify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify"></a>

```python
def reset_okta_verify() -> None
```

##### `reset_onprem_mfa` <a name="reset_onprem_mfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa"></a>

```python
def reset_onprem_mfa() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_rsa_token` <a name="reset_rsa_token" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken"></a>

```python
def reset_rsa_token() -> None
```

##### `reset_security_question` <a name="reset_security_question" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion"></a>

```python
def reset_security_question() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_symantec_vip` <a name="reset_symantec_vip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip"></a>

```python
def reset_symantec_vip() -> None
```

##### `reset_webauthn` <a name="reset_webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn"></a>

```python
def reset_webauthn() -> None
```

##### `reset_yubikey_token` <a name="reset_yubikey_token" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken"></a>

```python
def reset_yubikey_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import mfa_policy

mfaPolicy.MfaPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import mfa_policy

mfaPolicy.MfaPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import mfa_policy

mfaPolicy.MfaPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput">duo_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput">external_idp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput">fido_u2_f_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput">fido_webauthn_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput">google_otp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput">groups_included_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput">hotp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput">is_oie_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput">okta_call_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput">okta_email_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput">okta_otp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput">okta_password_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput">okta_push_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput">okta_question_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput">okta_sms_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput">okta_verify_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput">onprem_mfa_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput">phone_number_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput">rsa_token_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput">security_question_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput">symantec_vip_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput">webauthn_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput">yubikey_token_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo">duo</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp">external_idp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F">fido_u2_f</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn">fido_webauthn</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp">google_otp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp">hotp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie">is_oie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall">okta_call</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail">okta_email</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp">okta_otp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword">okta_password</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush">okta_push</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion">okta_question</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms">okta_sms</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify">okta_verify</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa">onprem_mfa</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber">phone_number</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken">rsa_token</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion">security_question</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip">symantec_vip</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn">webauthn</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken">yubikey_token</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `duo_input`<sup>Optional</sup> <a name="duo_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput"></a>

```python
duo_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `external_idp_input`<sup>Optional</sup> <a name="external_idp_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput"></a>

```python
external_idp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fido_u2_f_input`<sup>Optional</sup> <a name="fido_u2_f_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput"></a>

```python
fido_u2_f_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fido_webauthn_input`<sup>Optional</sup> <a name="fido_webauthn_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput"></a>

```python
fido_webauthn_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `google_otp_input`<sup>Optional</sup> <a name="google_otp_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput"></a>

```python
google_otp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `groups_included_input`<sup>Optional</sup> <a name="groups_included_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput"></a>

```python
groups_included_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hotp_input`<sup>Optional</sup> <a name="hotp_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput"></a>

```python
hotp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_oie_input`<sup>Optional</sup> <a name="is_oie_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput"></a>

```python
is_oie_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `okta_call_input`<sup>Optional</sup> <a name="okta_call_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput"></a>

```python
okta_call_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_email_input`<sup>Optional</sup> <a name="okta_email_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput"></a>

```python
okta_email_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_otp_input`<sup>Optional</sup> <a name="okta_otp_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput"></a>

```python
okta_otp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_password_input`<sup>Optional</sup> <a name="okta_password_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput"></a>

```python
okta_password_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_push_input`<sup>Optional</sup> <a name="okta_push_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput"></a>

```python
okta_push_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_question_input`<sup>Optional</sup> <a name="okta_question_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput"></a>

```python
okta_question_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_sms_input`<sup>Optional</sup> <a name="okta_sms_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput"></a>

```python
okta_sms_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_verify_input`<sup>Optional</sup> <a name="okta_verify_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput"></a>

```python
okta_verify_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `onprem_mfa_input`<sup>Optional</sup> <a name="onprem_mfa_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput"></a>

```python
onprem_mfa_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput"></a>

```python
phone_number_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rsa_token_input`<sup>Optional</sup> <a name="rsa_token_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput"></a>

```python
rsa_token_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_question_input`<sup>Optional</sup> <a name="security_question_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput"></a>

```python
security_question_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `symantec_vip_input`<sup>Optional</sup> <a name="symantec_vip_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput"></a>

```python
symantec_vip_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `webauthn_input`<sup>Optional</sup> <a name="webauthn_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput"></a>

```python
webauthn_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `yubikey_token_input`<sup>Optional</sup> <a name="yubikey_token_input" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput"></a>

```python
yubikey_token_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `duo`<sup>Required</sup> <a name="duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo"></a>

```python
duo: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `external_idp`<sup>Required</sup> <a name="external_idp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp"></a>

```python
external_idp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fido_u2_f`<sup>Required</sup> <a name="fido_u2_f" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F"></a>

```python
fido_u2_f: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fido_webauthn`<sup>Required</sup> <a name="fido_webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn"></a>

```python
fido_webauthn: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `google_otp`<sup>Required</sup> <a name="google_otp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp"></a>

```python
google_otp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `groups_included`<sup>Required</sup> <a name="groups_included" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hotp`<sup>Required</sup> <a name="hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp"></a>

```python
hotp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_oie`<sup>Required</sup> <a name="is_oie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie"></a>

```python
is_oie: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `okta_call`<sup>Required</sup> <a name="okta_call" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall"></a>

```python
okta_call: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_email`<sup>Required</sup> <a name="okta_email" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail"></a>

```python
okta_email: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_otp`<sup>Required</sup> <a name="okta_otp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp"></a>

```python
okta_otp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_password`<sup>Required</sup> <a name="okta_password" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword"></a>

```python
okta_password: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_push`<sup>Required</sup> <a name="okta_push" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush"></a>

```python
okta_push: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_question`<sup>Required</sup> <a name="okta_question" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion"></a>

```python
okta_question: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_sms`<sup>Required</sup> <a name="okta_sms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms"></a>

```python
okta_sms: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_verify`<sup>Required</sup> <a name="okta_verify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify"></a>

```python
okta_verify: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `onprem_mfa`<sup>Required</sup> <a name="onprem_mfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa"></a>

```python
onprem_mfa: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber"></a>

```python
phone_number: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rsa_token`<sup>Required</sup> <a name="rsa_token" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken"></a>

```python
rsa_token: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_question`<sup>Required</sup> <a name="security_question" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion"></a>

```python
security_question: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `symantec_vip`<sup>Required</sup> <a name="symantec_vip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip"></a>

```python
symantec_vip: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `webauthn`<sup>Required</sup> <a name="webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn"></a>

```python
webauthn: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `yubikey_token`<sup>Required</sup> <a name="yubikey_token" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken"></a>

```python
yubikey_token: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPolicyConfig <a name="MfaPolicyConfig" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import mfa_policy

mfaPolicy.MfaPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  duo: typing.Mapping[str] = None,
  external_idp: typing.Mapping[str] = None,
  fido_u2_f: typing.Mapping[str] = None,
  fido_webauthn: typing.Mapping[str] = None,
  google_otp: typing.Mapping[str] = None,
  groups_included: typing.List[str] = None,
  hotp: typing.Mapping[str] = None,
  id: str = None,
  is_oie: typing.Union[bool, IResolvable] = None,
  okta_call: typing.Mapping[str] = None,
  okta_email: typing.Mapping[str] = None,
  okta_otp: typing.Mapping[str] = None,
  okta_password: typing.Mapping[str] = None,
  okta_push: typing.Mapping[str] = None,
  okta_question: typing.Mapping[str] = None,
  okta_sms: typing.Mapping[str] = None,
  okta_verify: typing.Mapping[str] = None,
  onprem_mfa: typing.Mapping[str] = None,
  phone_number: typing.Mapping[str] = None,
  priority: typing.Union[int, float] = None,
  rsa_token: typing.Mapping[str] = None,
  security_question: typing.Mapping[str] = None,
  status: str = None,
  symantec_vip: typing.Mapping[str] = None,
  webauthn: typing.Mapping[str] = None,
  yubikey_token: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name">name</a></code> | <code>str</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description">description</a></code> | <code>str</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo">duo</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp">external_idp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F">fido_u2_f</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn">fido_webauthn</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp">google_otp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp">hotp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie">is_oie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall">okta_call</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail">okta_email</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp">okta_otp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword">okta_password</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush">okta_push</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion">okta_question</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms">okta_sms</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify">okta_verify</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa">onprem_mfa</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber">phone_number</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken">rsa_token</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion">security_question</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status">status</a></code> | <code>str</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip">symantec_vip</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn">webauthn</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken">yubikey_token</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#name MfaPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#description MfaPolicy#description}

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo"></a>

```python
duo: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}.

---

##### `external_idp`<sup>Optional</sup> <a name="external_idp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp"></a>

```python
external_idp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}.

---

##### `fido_u2_f`<sup>Optional</sup> <a name="fido_u2_f" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F"></a>

```python
fido_u2_f: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}.

---

##### `fido_webauthn`<sup>Optional</sup> <a name="fido_webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn"></a>

```python
fido_webauthn: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}.

---

##### `google_otp`<sup>Optional</sup> <a name="google_otp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp"></a>

```python
google_otp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}.

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#groups_included MfaPolicy#groups_included}

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp"></a>

```python
hotp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_oie`<sup>Optional</sup> <a name="is_oie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie"></a>

```python
is_oie: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#is_oie MfaPolicy#is_oie}

---

##### `okta_call`<sup>Optional</sup> <a name="okta_call" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall"></a>

```python
okta_call: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}.

---

##### `okta_email`<sup>Optional</sup> <a name="okta_email" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail"></a>

```python
okta_email: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}.

---

##### `okta_otp`<sup>Optional</sup> <a name="okta_otp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp"></a>

```python
okta_otp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}.

---

##### `okta_password`<sup>Optional</sup> <a name="okta_password" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword"></a>

```python
okta_password: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}.

---

##### `okta_push`<sup>Optional</sup> <a name="okta_push" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush"></a>

```python
okta_push: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}.

---

##### `okta_question`<sup>Optional</sup> <a name="okta_question" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion"></a>

```python
okta_question: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}.

---

##### `okta_sms`<sup>Optional</sup> <a name="okta_sms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms"></a>

```python
okta_sms: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}.

---

##### `okta_verify`<sup>Optional</sup> <a name="okta_verify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify"></a>

```python
okta_verify: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}.

---

##### `onprem_mfa`<sup>Optional</sup> <a name="onprem_mfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa"></a>

```python
onprem_mfa: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber"></a>

```python
phone_number: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#priority MfaPolicy#priority}

---

##### `rsa_token`<sup>Optional</sup> <a name="rsa_token" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken"></a>

```python
rsa_token: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}.

---

##### `security_question`<sup>Optional</sup> <a name="security_question" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion"></a>

```python
security_question: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#status MfaPolicy#status}

---

##### `symantec_vip`<sup>Optional</sup> <a name="symantec_vip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip"></a>

```python
symantec_vip: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn"></a>

```python
webauthn: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}.

---

##### `yubikey_token`<sup>Optional</sup> <a name="yubikey_token" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken"></a>

```python
yubikey_token: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}.

---



