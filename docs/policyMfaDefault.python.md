# `policyMfaDefault` Submodule <a name="`policyMfaDefault` Submodule" id="@cdktf/provider-okta.policyMfaDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfaDefault <a name="PolicyMfaDefault" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default okta_policy_mfa_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_mfa_default

policyMfaDefault.PolicyMfaDefault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  duo: typing.Mapping[str] = None,
  external_idp: typing.Mapping[str] = None,
  external_idps: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  fido_u2_f: typing.Mapping[str] = None,
  fido_webauthn: typing.Mapping[str] = None,
  google_otp: typing.Mapping[str] = None,
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
  rsa_token: typing.Mapping[str] = None,
  security_question: typing.Mapping[str] = None,
  smart_card_idp: typing.Mapping[str] = None,
  symantec_vip: typing.Mapping[str] = None,
  webauthn: typing.Mapping[str] = None,
  yubikey_token: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.duo">duo</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.externalIdp">external_idp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.externalIdps">external_idps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.fidoU2F">fido_u2_f</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.fidoWebauthn">fido_webauthn</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.googleOtp">google_otp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.hotp">hotp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.isOie">is_oie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaCall">okta_call</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaEmail">okta_email</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaOtp">okta_otp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaPassword">okta_password</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaPush">okta_push</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaQuestion">okta_question</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaSms">okta_sms</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaVerify">okta_verify</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.onpremMfa">onprem_mfa</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.phoneNumber">phone_number</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.rsaToken">rsa_token</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.securityQuestion">security_question</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.smartCardIdp">smart_card_idp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#smart_card_idp PolicyMfaDefault#smart_card_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.symantecVip">symantec_vip</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.webauthn">webauthn</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.yubikeyToken">yubikey_token</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.duo"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}.

---

##### `external_idp`<sup>Optional</sup> <a name="external_idp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.externalIdp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}.

---

##### `external_idps`<sup>Optional</sup> <a name="external_idps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.externalIdps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}.

---

##### `fido_u2_f`<sup>Optional</sup> <a name="fido_u2_f" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.fidoU2F"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}.

---

##### `fido_webauthn`<sup>Optional</sup> <a name="fido_webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.fidoWebauthn"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}.

---

##### `google_otp`<sup>Optional</sup> <a name="google_otp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.googleOtp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}.

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.hotp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_oie`<sup>Optional</sup> <a name="is_oie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.isOie"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#is_oie PolicyMfaDefault#is_oie}

---

##### `okta_call`<sup>Optional</sup> <a name="okta_call" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaCall"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}.

---

##### `okta_email`<sup>Optional</sup> <a name="okta_email" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaEmail"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}.

---

##### `okta_otp`<sup>Optional</sup> <a name="okta_otp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaOtp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}.

---

##### `okta_password`<sup>Optional</sup> <a name="okta_password" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaPassword"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}.

---

##### `okta_push`<sup>Optional</sup> <a name="okta_push" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaPush"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}.

---

##### `okta_question`<sup>Optional</sup> <a name="okta_question" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaQuestion"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}.

---

##### `okta_sms`<sup>Optional</sup> <a name="okta_sms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaSms"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}.

---

##### `okta_verify`<sup>Optional</sup> <a name="okta_verify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaVerify"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}.

---

##### `onprem_mfa`<sup>Optional</sup> <a name="onprem_mfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.onpremMfa"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.phoneNumber"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}.

---

##### `rsa_token`<sup>Optional</sup> <a name="rsa_token" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.rsaToken"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}.

---

##### `security_question`<sup>Optional</sup> <a name="security_question" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.securityQuestion"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}.

---

##### `smart_card_idp`<sup>Optional</sup> <a name="smart_card_idp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.smartCardIdp"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#smart_card_idp PolicyMfaDefault#smart_card_idp}.

---

##### `symantec_vip`<sup>Optional</sup> <a name="symantec_vip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.symantecVip"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.webauthn"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}.

---

##### `yubikey_token`<sup>Optional</sup> <a name="yubikey_token" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.yubikeyToken"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo">reset_duo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp">reset_external_idp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdps">reset_external_idps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F">reset_fido_u2_f</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn">reset_fido_webauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp">reset_google_otp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp">reset_hotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie">reset_is_oie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall">reset_okta_call</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail">reset_okta_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp">reset_okta_otp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword">reset_okta_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush">reset_okta_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion">reset_okta_question</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms">reset_okta_sms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify">reset_okta_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa">reset_onprem_mfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken">reset_rsa_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion">reset_security_question</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSmartCardIdp">reset_smart_card_idp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip">reset_symantec_vip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn">reset_webauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken">reset_yubikey_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_duo` <a name="reset_duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo"></a>

```python
def reset_duo() -> None
```

##### `reset_external_idp` <a name="reset_external_idp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp"></a>

```python
def reset_external_idp() -> None
```

##### `reset_external_idps` <a name="reset_external_idps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdps"></a>

```python
def reset_external_idps() -> None
```

##### `reset_fido_u2_f` <a name="reset_fido_u2_f" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F"></a>

```python
def reset_fido_u2_f() -> None
```

##### `reset_fido_webauthn` <a name="reset_fido_webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn"></a>

```python
def reset_fido_webauthn() -> None
```

##### `reset_google_otp` <a name="reset_google_otp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp"></a>

```python
def reset_google_otp() -> None
```

##### `reset_hotp` <a name="reset_hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp"></a>

```python
def reset_hotp() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_oie` <a name="reset_is_oie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie"></a>

```python
def reset_is_oie() -> None
```

##### `reset_okta_call` <a name="reset_okta_call" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall"></a>

```python
def reset_okta_call() -> None
```

##### `reset_okta_email` <a name="reset_okta_email" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail"></a>

```python
def reset_okta_email() -> None
```

##### `reset_okta_otp` <a name="reset_okta_otp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp"></a>

```python
def reset_okta_otp() -> None
```

##### `reset_okta_password` <a name="reset_okta_password" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword"></a>

```python
def reset_okta_password() -> None
```

##### `reset_okta_push` <a name="reset_okta_push" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush"></a>

```python
def reset_okta_push() -> None
```

##### `reset_okta_question` <a name="reset_okta_question" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion"></a>

```python
def reset_okta_question() -> None
```

##### `reset_okta_sms` <a name="reset_okta_sms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms"></a>

```python
def reset_okta_sms() -> None
```

##### `reset_okta_verify` <a name="reset_okta_verify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify"></a>

```python
def reset_okta_verify() -> None
```

##### `reset_onprem_mfa` <a name="reset_onprem_mfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa"></a>

```python
def reset_onprem_mfa() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_rsa_token` <a name="reset_rsa_token" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken"></a>

```python
def reset_rsa_token() -> None
```

##### `reset_security_question` <a name="reset_security_question" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion"></a>

```python
def reset_security_question() -> None
```

##### `reset_smart_card_idp` <a name="reset_smart_card_idp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSmartCardIdp"></a>

```python
def reset_smart_card_idp() -> None
```

##### `reset_symantec_vip` <a name="reset_symantec_vip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip"></a>

```python
def reset_symantec_vip() -> None
```

##### `reset_webauthn` <a name="reset_webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn"></a>

```python
def reset_webauthn() -> None
```

##### `reset_yubikey_token` <a name="reset_yubikey_token" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken"></a>

```python
def reset_yubikey_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyMfaDefault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_mfa_default

policyMfaDefault.PolicyMfaDefault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_mfa_default

policyMfaDefault.PolicyMfaDefault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_mfa_default

policyMfaDefault.PolicyMfaDefault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_mfa_default

policyMfaDefault.PolicyMfaDefault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyMfaDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyMfaDefault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyMfaDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyMfaDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId">default_included_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput">duo_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput">external_idp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpsInput">external_idps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput">fido_u2_f_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput">fido_webauthn_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput">google_otp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput">hotp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput">is_oie_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput">okta_call_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput">okta_email_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput">okta_otp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput">okta_password_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput">okta_push_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput">okta_question_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput">okta_sms_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput">okta_verify_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput">onprem_mfa_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput">phone_number_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput">rsa_token_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput">security_question_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.smartCardIdpInput">smart_card_idp_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput">symantec_vip_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput">webauthn_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput">yubikey_token_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo">duo</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp">external_idp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdps">external_idps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F">fido_u2_f</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn">fido_webauthn</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp">google_otp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp">hotp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie">is_oie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall">okta_call</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail">okta_email</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp">okta_otp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword">okta_password</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush">okta_push</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion">okta_question</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms">okta_sms</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify">okta_verify</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa">onprem_mfa</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber">phone_number</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken">rsa_token</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion">security_question</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.smartCardIdp">smart_card_idp</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip">symantec_vip</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn">webauthn</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken">yubikey_token</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_included_group_id`<sup>Required</sup> <a name="default_included_group_id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId"></a>

```python
default_included_group_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `duo_input`<sup>Optional</sup> <a name="duo_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput"></a>

```python
duo_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `external_idp_input`<sup>Optional</sup> <a name="external_idp_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput"></a>

```python
external_idp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `external_idps_input`<sup>Optional</sup> <a name="external_idps_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpsInput"></a>

```python
external_idps_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `fido_u2_f_input`<sup>Optional</sup> <a name="fido_u2_f_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput"></a>

```python
fido_u2_f_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fido_webauthn_input`<sup>Optional</sup> <a name="fido_webauthn_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput"></a>

```python
fido_webauthn_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `google_otp_input`<sup>Optional</sup> <a name="google_otp_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput"></a>

```python
google_otp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hotp_input`<sup>Optional</sup> <a name="hotp_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput"></a>

```python
hotp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_oie_input`<sup>Optional</sup> <a name="is_oie_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput"></a>

```python
is_oie_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `okta_call_input`<sup>Optional</sup> <a name="okta_call_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput"></a>

```python
okta_call_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_email_input`<sup>Optional</sup> <a name="okta_email_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput"></a>

```python
okta_email_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_otp_input`<sup>Optional</sup> <a name="okta_otp_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput"></a>

```python
okta_otp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_password_input`<sup>Optional</sup> <a name="okta_password_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput"></a>

```python
okta_password_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_push_input`<sup>Optional</sup> <a name="okta_push_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput"></a>

```python
okta_push_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_question_input`<sup>Optional</sup> <a name="okta_question_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput"></a>

```python
okta_question_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_sms_input`<sup>Optional</sup> <a name="okta_sms_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput"></a>

```python
okta_sms_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_verify_input`<sup>Optional</sup> <a name="okta_verify_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput"></a>

```python
okta_verify_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `onprem_mfa_input`<sup>Optional</sup> <a name="onprem_mfa_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput"></a>

```python
onprem_mfa_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput"></a>

```python
phone_number_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rsa_token_input`<sup>Optional</sup> <a name="rsa_token_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput"></a>

```python
rsa_token_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_question_input`<sup>Optional</sup> <a name="security_question_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput"></a>

```python
security_question_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `smart_card_idp_input`<sup>Optional</sup> <a name="smart_card_idp_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.smartCardIdpInput"></a>

```python
smart_card_idp_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `symantec_vip_input`<sup>Optional</sup> <a name="symantec_vip_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput"></a>

```python
symantec_vip_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `webauthn_input`<sup>Optional</sup> <a name="webauthn_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput"></a>

```python
webauthn_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `yubikey_token_input`<sup>Optional</sup> <a name="yubikey_token_input" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput"></a>

```python
yubikey_token_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `duo`<sup>Required</sup> <a name="duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo"></a>

```python
duo: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `external_idp`<sup>Required</sup> <a name="external_idp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp"></a>

```python
external_idp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `external_idps`<sup>Required</sup> <a name="external_idps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdps"></a>

```python
external_idps: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `fido_u2_f`<sup>Required</sup> <a name="fido_u2_f" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F"></a>

```python
fido_u2_f: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fido_webauthn`<sup>Required</sup> <a name="fido_webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn"></a>

```python
fido_webauthn: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `google_otp`<sup>Required</sup> <a name="google_otp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp"></a>

```python
google_otp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hotp`<sup>Required</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp"></a>

```python
hotp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_oie`<sup>Required</sup> <a name="is_oie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie"></a>

```python
is_oie: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `okta_call`<sup>Required</sup> <a name="okta_call" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall"></a>

```python
okta_call: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_email`<sup>Required</sup> <a name="okta_email" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail"></a>

```python
okta_email: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_otp`<sup>Required</sup> <a name="okta_otp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp"></a>

```python
okta_otp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_password`<sup>Required</sup> <a name="okta_password" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword"></a>

```python
okta_password: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_push`<sup>Required</sup> <a name="okta_push" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush"></a>

```python
okta_push: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_question`<sup>Required</sup> <a name="okta_question" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion"></a>

```python
okta_question: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_sms`<sup>Required</sup> <a name="okta_sms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms"></a>

```python
okta_sms: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `okta_verify`<sup>Required</sup> <a name="okta_verify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify"></a>

```python
okta_verify: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `onprem_mfa`<sup>Required</sup> <a name="onprem_mfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa"></a>

```python
onprem_mfa: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber"></a>

```python
phone_number: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rsa_token`<sup>Required</sup> <a name="rsa_token" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken"></a>

```python
rsa_token: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_question`<sup>Required</sup> <a name="security_question" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion"></a>

```python
security_question: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `smart_card_idp`<sup>Required</sup> <a name="smart_card_idp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.smartCardIdp"></a>

```python
smart_card_idp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `symantec_vip`<sup>Required</sup> <a name="symantec_vip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip"></a>

```python
symantec_vip: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `webauthn`<sup>Required</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn"></a>

```python
webauthn: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `yubikey_token`<sup>Required</sup> <a name="yubikey_token" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken"></a>

```python
yubikey_token: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaDefaultConfig <a name="PolicyMfaDefaultConfig" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_mfa_default

policyMfaDefault.PolicyMfaDefaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  duo: typing.Mapping[str] = None,
  external_idp: typing.Mapping[str] = None,
  external_idps: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  fido_u2_f: typing.Mapping[str] = None,
  fido_webauthn: typing.Mapping[str] = None,
  google_otp: typing.Mapping[str] = None,
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
  rsa_token: typing.Mapping[str] = None,
  security_question: typing.Mapping[str] = None,
  smart_card_idp: typing.Mapping[str] = None,
  symantec_vip: typing.Mapping[str] = None,
  webauthn: typing.Mapping[str] = None,
  yubikey_token: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo">duo</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp">external_idp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdps">external_idps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F">fido_u2_f</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn">fido_webauthn</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp">google_otp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp">hotp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie">is_oie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall">okta_call</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail">okta_email</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp">okta_otp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword">okta_password</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush">okta_push</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion">okta_question</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms">okta_sms</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify">okta_verify</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa">onprem_mfa</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber">phone_number</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken">rsa_token</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion">security_question</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.smartCardIdp">smart_card_idp</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#smart_card_idp PolicyMfaDefault#smart_card_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip">symantec_vip</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn">webauthn</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken">yubikey_token</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo"></a>

```python
duo: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}.

---

##### `external_idp`<sup>Optional</sup> <a name="external_idp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp"></a>

```python
external_idp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}.

---

##### `external_idps`<sup>Optional</sup> <a name="external_idps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdps"></a>

```python
external_idps: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}.

---

##### `fido_u2_f`<sup>Optional</sup> <a name="fido_u2_f" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F"></a>

```python
fido_u2_f: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}.

---

##### `fido_webauthn`<sup>Optional</sup> <a name="fido_webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn"></a>

```python
fido_webauthn: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}.

---

##### `google_otp`<sup>Optional</sup> <a name="google_otp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp"></a>

```python
google_otp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}.

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp"></a>

```python
hotp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_oie`<sup>Optional</sup> <a name="is_oie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie"></a>

```python
is_oie: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#is_oie PolicyMfaDefault#is_oie}

---

##### `okta_call`<sup>Optional</sup> <a name="okta_call" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall"></a>

```python
okta_call: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}.

---

##### `okta_email`<sup>Optional</sup> <a name="okta_email" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail"></a>

```python
okta_email: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}.

---

##### `okta_otp`<sup>Optional</sup> <a name="okta_otp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp"></a>

```python
okta_otp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}.

---

##### `okta_password`<sup>Optional</sup> <a name="okta_password" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword"></a>

```python
okta_password: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}.

---

##### `okta_push`<sup>Optional</sup> <a name="okta_push" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush"></a>

```python
okta_push: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}.

---

##### `okta_question`<sup>Optional</sup> <a name="okta_question" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion"></a>

```python
okta_question: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}.

---

##### `okta_sms`<sup>Optional</sup> <a name="okta_sms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms"></a>

```python
okta_sms: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}.

---

##### `okta_verify`<sup>Optional</sup> <a name="okta_verify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify"></a>

```python
okta_verify: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}.

---

##### `onprem_mfa`<sup>Optional</sup> <a name="onprem_mfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa"></a>

```python
onprem_mfa: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber"></a>

```python
phone_number: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}.

---

##### `rsa_token`<sup>Optional</sup> <a name="rsa_token" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken"></a>

```python
rsa_token: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}.

---

##### `security_question`<sup>Optional</sup> <a name="security_question" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion"></a>

```python
security_question: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}.

---

##### `smart_card_idp`<sup>Optional</sup> <a name="smart_card_idp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.smartCardIdp"></a>

```python
smart_card_idp: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#smart_card_idp PolicyMfaDefault#smart_card_idp}.

---

##### `symantec_vip`<sup>Optional</sup> <a name="symantec_vip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip"></a>

```python
symantec_vip: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn"></a>

```python
webauthn: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}.

---

##### `yubikey_token`<sup>Optional</sup> <a name="yubikey_token" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken"></a>

```python
yubikey_token: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}.

---



