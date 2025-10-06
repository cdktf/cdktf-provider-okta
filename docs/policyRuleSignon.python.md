# `policyRuleSignon` Submodule <a name="`policyRuleSignon` Submodule" id="@cdktf/provider-okta.policyRuleSignon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleSignon <a name="PolicyRuleSignon" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon okta_policy_rule_signon}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignon(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  access: str = None,
  authtype: str = None,
  behaviors: typing.List[str] = None,
  factor_sequence: IResolvable | typing.List[PolicyRuleSignonFactorSequence] = None,
  id: str = None,
  identity_provider: str = None,
  identity_provider_ids: typing.List[str] = None,
  mfa_lifetime: typing.Union[int, float] = None,
  mfa_prompt: str = None,
  mfa_remember_device: bool | IResolvable = None,
  mfa_required: bool | IResolvable = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  policy_id: str = None,
  primary_factor: str = None,
  priority: typing.Union[int, float] = None,
  risc_level: str = None,
  risk_level: str = None,
  session_idle: typing.Union[int, float] = None,
  session_lifetime: typing.Union[int, float] = None,
  session_persistent: bool | IResolvable = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.access">access</a></code> | <code>str</code> | Allow or deny access based on the rule conditions: `ALLOW`, `DENY` or `CHALLENGE`. Default: `ALLOW`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.authtype">authtype</a></code> | <code>str</code> | Authentication entrypoint: `ANY`, `RADIUS` or `LDAP_INTERFACE`. Default: `ANY`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.factorSequence">factor_sequence</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.identityProvider">identity_provider</a></code> | <code>str</code> | Apply rule based on the IdP used: `ANY`, `OKTA` or `SPECIFIC_IDP`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.identityProviderIds">identity_provider_ids</a></code> | <code>typing.List[str]</code> | When identity_provider is `SPECIFIC_IDP` then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaLifetime">mfa_lifetime</a></code> | <code>typing.Union[int, float]</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaPrompt">mfa_prompt</a></code> | <code>str</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: `DEVICE`, `SESSION` or`ALWAYS`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaRememberDevice">mfa_remember_device</a></code> | <code>bool \| cdktf.IResolvable</code> | Remember MFA device. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaRequired">mfa_required</a></code> | <code>bool \| cdktf.IResolvable</code> | Require MFA. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.primaryFactor">primary_factor</a></code> | <code>str</code> | Rule's primary factor. **WARNING** Ony works as a part of the Identity Engine. Valid values: `PASSWORD_IDP_ANY_FACTOR`, `PASSWORD_IDP`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Rule priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.riscLevel">risc_level</a></code> | <code>str</code> | Risc level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.riskLevel">risk_level</a></code> | <code>str</code> | Risk level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionIdle">session_idle</a></code> | <code>typing.Union[int, float]</code> | Max minutes a session can be idle. Default: `120`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionLifetime">session_lifetime</a></code> | <code>typing.Union[int, float]</code> | Max minutes a session is active: Disable = 0. Default: `120`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionPersistent">session_persistent</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.name"></a>

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#name PolicyRuleSignon#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.access"></a>

- *Type:* str

Allow or deny access based on the rule conditions: `ALLOW`, `DENY` or `CHALLENGE`. Default: `ALLOW`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#access PolicyRuleSignon#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.authtype"></a>

- *Type:* str

Authentication entrypoint: `ANY`, `RADIUS` or `LDAP_INTERFACE`. Default: `ANY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#authtype PolicyRuleSignon#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.behaviors"></a>

- *Type:* typing.List[str]

List of behavior IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#behaviors PolicyRuleSignon#behaviors}

---

##### `factor_sequence`<sup>Optional</sup> <a name="factor_sequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.factorSequence"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]

factor_sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#factor_sequence PolicyRuleSignon#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider`<sup>Optional</sup> <a name="identity_provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.identityProvider"></a>

- *Type:* str

Apply rule based on the IdP used: `ANY`, `OKTA` or `SPECIFIC_IDP`.

Default: `ANY`. ~> **WARNING**: Use of `identity_provider` requires a feature flag to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#identity_provider PolicyRuleSignon#identity_provider}

---

##### `identity_provider_ids`<sup>Optional</sup> <a name="identity_provider_ids" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.identityProviderIds"></a>

- *Type:* typing.List[str]

When identity_provider is `SPECIFIC_IDP` then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#identity_provider_ids PolicyRuleSignon#identity_provider_ids}

---

##### `mfa_lifetime`<sup>Optional</sup> <a name="mfa_lifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaLifetime"></a>

- *Type:* typing.Union[int, float]

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#mfa_lifetime PolicyRuleSignon#mfa_lifetime}

---

##### `mfa_prompt`<sup>Optional</sup> <a name="mfa_prompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaPrompt"></a>

- *Type:* str

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: `DEVICE`, `SESSION` or`ALWAYS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#mfa_prompt PolicyRuleSignon#mfa_prompt}

---

##### `mfa_remember_device`<sup>Optional</sup> <a name="mfa_remember_device" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaRememberDevice"></a>

- *Type:* bool | cdktf.IResolvable

Remember MFA device. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#mfa_remember_device PolicyRuleSignon#mfa_remember_device}

---

##### `mfa_required`<sup>Optional</sup> <a name="mfa_required" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaRequired"></a>

- *Type:* bool | cdktf.IResolvable

Require MFA. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#mfa_required PolicyRuleSignon#mfa_required}

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkConnection"></a>

- *Type:* str

Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#network_connection PolicyRuleSignon#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkExcludes"></a>

- *Type:* typing.List[str]

Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#network_excludes PolicyRuleSignon#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkIncludes"></a>

- *Type:* typing.List[str]

Required if `network_connection` = `ZONE`. Indicates the network zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#network_includes PolicyRuleSignon#network_includes}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.policyId"></a>

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#policy_id PolicyRuleSignon#policy_id}

---

##### `primary_factor`<sup>Optional</sup> <a name="primary_factor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.primaryFactor"></a>

- *Type:* str

Rule's primary factor. **WARNING** Ony works as a part of the Identity Engine. Valid values: `PASSWORD_IDP_ANY_FACTOR`, `PASSWORD_IDP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#primary_factor PolicyRuleSignon#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Rule priority.

This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#priority PolicyRuleSignon#priority}

---

##### `risc_level`<sup>Optional</sup> <a name="risc_level" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.riscLevel"></a>

- *Type:* str

Risc level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#risc_level PolicyRuleSignon#risc_level}

---

##### `risk_level`<sup>Optional</sup> <a name="risk_level" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.riskLevel"></a>

- *Type:* str

Risk level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#risk_level PolicyRuleSignon#risk_level}

---

##### `session_idle`<sup>Optional</sup> <a name="session_idle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionIdle"></a>

- *Type:* typing.Union[int, float]

Max minutes a session can be idle. Default: `120`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#session_idle PolicyRuleSignon#session_idle}

---

##### `session_lifetime`<sup>Optional</sup> <a name="session_lifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionLifetime"></a>

- *Type:* typing.Union[int, float]

Max minutes a session is active: Disable = 0. Default: `120`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#session_lifetime PolicyRuleSignon#session_lifetime}

---

##### `session_persistent`<sup>Optional</sup> <a name="session_persistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionPersistent"></a>

- *Type:* bool | cdktf.IResolvable

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#session_persistent PolicyRuleSignon#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.status"></a>

- *Type:* str

Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#status PolicyRuleSignon#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.usersExcluded"></a>

- *Type:* typing.List[str]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#users_excluded PolicyRuleSignon#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence">put_factor_sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype">reset_authtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors">reset_behaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence">reset_factor_sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider">reset_identity_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds">reset_identity_provider_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime">reset_mfa_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt">reset_mfa_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice">reset_mfa_remember_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired">reset_mfa_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection">reset_network_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes">reset_network_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes">reset_network_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor">reset_primary_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel">reset_risc_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiskLevel">reset_risk_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle">reset_session_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime">reset_session_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent">reset_session_persistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded">reset_users_excluded</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_factor_sequence` <a name="put_factor_sequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence"></a>

```python
def put_factor_sequence(
  value: IResolvable | typing.List[PolicyRuleSignonFactorSequence]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_authtype` <a name="reset_authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype"></a>

```python
def reset_authtype() -> None
```

##### `reset_behaviors` <a name="reset_behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors"></a>

```python
def reset_behaviors() -> None
```

##### `reset_factor_sequence` <a name="reset_factor_sequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence"></a>

```python
def reset_factor_sequence() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider` <a name="reset_identity_provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider"></a>

```python
def reset_identity_provider() -> None
```

##### `reset_identity_provider_ids` <a name="reset_identity_provider_ids" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds"></a>

```python
def reset_identity_provider_ids() -> None
```

##### `reset_mfa_lifetime` <a name="reset_mfa_lifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime"></a>

```python
def reset_mfa_lifetime() -> None
```

##### `reset_mfa_prompt` <a name="reset_mfa_prompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt"></a>

```python
def reset_mfa_prompt() -> None
```

##### `reset_mfa_remember_device` <a name="reset_mfa_remember_device" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice"></a>

```python
def reset_mfa_remember_device() -> None
```

##### `reset_mfa_required` <a name="reset_mfa_required" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired"></a>

```python
def reset_mfa_required() -> None
```

##### `reset_network_connection` <a name="reset_network_connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection"></a>

```python
def reset_network_connection() -> None
```

##### `reset_network_excludes` <a name="reset_network_excludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes"></a>

```python
def reset_network_excludes() -> None
```

##### `reset_network_includes` <a name="reset_network_includes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes"></a>

```python
def reset_network_includes() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_primary_factor` <a name="reset_primary_factor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor"></a>

```python
def reset_primary_factor() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_risc_level` <a name="reset_risc_level" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel"></a>

```python
def reset_risc_level() -> None
```

##### `reset_risk_level` <a name="reset_risk_level" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiskLevel"></a>

```python
def reset_risk_level() -> None
```

##### `reset_session_idle` <a name="reset_session_idle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle"></a>

```python
def reset_session_idle() -> None
```

##### `reset_session_lifetime` <a name="reset_session_lifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime"></a>

```python
def reset_session_lifetime() -> None
```

##### `reset_session_persistent` <a name="reset_session_persistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent"></a>

```python
def reset_session_persistent() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_users_excluded` <a name="reset_users_excluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded"></a>

```python
def reset_users_excluded() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyRuleSignon resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignon.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignon.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignon.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignon.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyRuleSignon resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyRuleSignon to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyRuleSignon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleSignon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence">factor_sequence</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput">authtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput">behaviors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput">factor_sequence_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput">identity_provider_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput">identity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput">mfa_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput">mfa_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput">mfa_remember_device_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput">mfa_required_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput">network_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput">network_excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput">network_includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput">primary_factor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput">risc_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riskLevelInput">risk_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput">session_idle_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput">session_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput">session_persistent_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput">users_excluded_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype">authtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider">identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds">identity_provider_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime">mfa_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt">mfa_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice">mfa_remember_device</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired">mfa_required</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection">network_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor">primary_factor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel">risc_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riskLevel">risk_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle">session_idle</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime">session_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent">session_persistent</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `factor_sequence`<sup>Required</sup> <a name="factor_sequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence"></a>

```python
factor_sequence: PolicyRuleSignonFactorSequenceList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a>

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `authtype_input`<sup>Optional</sup> <a name="authtype_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput"></a>

```python
authtype_input: str
```

- *Type:* str

---

##### `behaviors_input`<sup>Optional</sup> <a name="behaviors_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput"></a>

```python
behaviors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `factor_sequence_input`<sup>Optional</sup> <a name="factor_sequence_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput"></a>

```python
factor_sequence_input: IResolvable | typing.List[PolicyRuleSignonFactorSequence]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]

---

##### `identity_provider_ids_input`<sup>Optional</sup> <a name="identity_provider_ids_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput"></a>

```python
identity_provider_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_input`<sup>Optional</sup> <a name="identity_provider_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput"></a>

```python
identity_provider_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mfa_lifetime_input`<sup>Optional</sup> <a name="mfa_lifetime_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput"></a>

```python
mfa_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mfa_prompt_input`<sup>Optional</sup> <a name="mfa_prompt_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput"></a>

```python
mfa_prompt_input: str
```

- *Type:* str

---

##### `mfa_remember_device_input`<sup>Optional</sup> <a name="mfa_remember_device_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput"></a>

```python
mfa_remember_device_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `mfa_required_input`<sup>Optional</sup> <a name="mfa_required_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput"></a>

```python
mfa_required_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_connection_input`<sup>Optional</sup> <a name="network_connection_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput"></a>

```python
network_connection_input: str
```

- *Type:* str

---

##### `network_excludes_input`<sup>Optional</sup> <a name="network_excludes_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput"></a>

```python
network_excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes_input`<sup>Optional</sup> <a name="network_includes_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput"></a>

```python
network_includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `primary_factor_input`<sup>Optional</sup> <a name="primary_factor_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput"></a>

```python
primary_factor_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `risc_level_input`<sup>Optional</sup> <a name="risc_level_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput"></a>

```python
risc_level_input: str
```

- *Type:* str

---

##### `risk_level_input`<sup>Optional</sup> <a name="risk_level_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riskLevelInput"></a>

```python
risk_level_input: str
```

- *Type:* str

---

##### `session_idle_input`<sup>Optional</sup> <a name="session_idle_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput"></a>

```python
session_idle_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_lifetime_input`<sup>Optional</sup> <a name="session_lifetime_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput"></a>

```python
session_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_persistent_input`<sup>Optional</sup> <a name="session_persistent_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput"></a>

```python
session_persistent_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `users_excluded_input`<sup>Optional</sup> <a name="users_excluded_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput"></a>

```python
users_excluded_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `authtype`<sup>Required</sup> <a name="authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype"></a>

```python
authtype: str
```

- *Type:* str

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

---

##### `identity_provider_ids`<sup>Required</sup> <a name="identity_provider_ids" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds"></a>

```python
identity_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mfa_lifetime`<sup>Required</sup> <a name="mfa_lifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime"></a>

```python
mfa_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mfa_prompt`<sup>Required</sup> <a name="mfa_prompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt"></a>

```python
mfa_prompt: str
```

- *Type:* str

---

##### `mfa_remember_device`<sup>Required</sup> <a name="mfa_remember_device" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice"></a>

```python
mfa_remember_device: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `mfa_required`<sup>Required</sup> <a name="mfa_required" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired"></a>

```python
mfa_required: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_connection`<sup>Required</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

---

##### `network_excludes`<sup>Required</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes`<sup>Required</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `primary_factor`<sup>Required</sup> <a name="primary_factor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor"></a>

```python
primary_factor: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `risc_level`<sup>Required</sup> <a name="risc_level" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel"></a>

```python
risc_level: str
```

- *Type:* str

---

##### `risk_level`<sup>Required</sup> <a name="risk_level" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riskLevel"></a>

```python
risk_level: str
```

- *Type:* str

---

##### `session_idle`<sup>Required</sup> <a name="session_idle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle"></a>

```python
session_idle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_lifetime`<sup>Required</sup> <a name="session_lifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime"></a>

```python
session_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_persistent`<sup>Required</sup> <a name="session_persistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent"></a>

```python
session_persistent: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `users_excluded`<sup>Required</sup> <a name="users_excluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleSignonConfig <a name="PolicyRuleSignonConfig" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignonConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  access: str = None,
  authtype: str = None,
  behaviors: typing.List[str] = None,
  factor_sequence: IResolvable | typing.List[PolicyRuleSignonFactorSequence] = None,
  id: str = None,
  identity_provider: str = None,
  identity_provider_ids: typing.List[str] = None,
  mfa_lifetime: typing.Union[int, float] = None,
  mfa_prompt: str = None,
  mfa_remember_device: bool | IResolvable = None,
  mfa_required: bool | IResolvable = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  policy_id: str = None,
  primary_factor: str = None,
  priority: typing.Union[int, float] = None,
  risc_level: str = None,
  risk_level: str = None,
  session_idle: typing.Union[int, float] = None,
  session_lifetime: typing.Union[int, float] = None,
  session_persistent: bool | IResolvable = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access">access</a></code> | <code>str</code> | Allow or deny access based on the rule conditions: `ALLOW`, `DENY` or `CHALLENGE`. Default: `ALLOW`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype">authtype</a></code> | <code>str</code> | Authentication entrypoint: `ANY`, `RADIUS` or `LDAP_INTERFACE`. Default: `ANY`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence">factor_sequence</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider">identity_provider</a></code> | <code>str</code> | Apply rule based on the IdP used: `ANY`, `OKTA` or `SPECIFIC_IDP`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds">identity_provider_ids</a></code> | <code>typing.List[str]</code> | When identity_provider is `SPECIFIC_IDP` then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime">mfa_lifetime</a></code> | <code>typing.Union[int, float]</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt">mfa_prompt</a></code> | <code>str</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: `DEVICE`, `SESSION` or`ALWAYS`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice">mfa_remember_device</a></code> | <code>bool \| cdktf.IResolvable</code> | Remember MFA device. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired">mfa_required</a></code> | <code>bool \| cdktf.IResolvable</code> | Require MFA. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor">primary_factor</a></code> | <code>str</code> | Rule's primary factor. **WARNING** Ony works as a part of the Identity Engine. Valid values: `PASSWORD_IDP_ANY_FACTOR`, `PASSWORD_IDP`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Rule priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel">risc_level</a></code> | <code>str</code> | Risc level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riskLevel">risk_level</a></code> | <code>str</code> | Risk level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle">session_idle</a></code> | <code>typing.Union[int, float]</code> | Max minutes a session can be idle. Default: `120`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime">session_lifetime</a></code> | <code>typing.Union[int, float]</code> | Max minutes a session is active: Disable = 0. Default: `120`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent">session_persistent</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status">status</a></code> | <code>str</code> | Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#name PolicyRuleSignon#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access"></a>

```python
access: str
```

- *Type:* str

Allow or deny access based on the rule conditions: `ALLOW`, `DENY` or `CHALLENGE`. Default: `ALLOW`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#access PolicyRuleSignon#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype"></a>

```python
authtype: str
```

- *Type:* str

Authentication entrypoint: `ANY`, `RADIUS` or `LDAP_INTERFACE`. Default: `ANY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#authtype PolicyRuleSignon#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

List of behavior IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#behaviors PolicyRuleSignon#behaviors}

---

##### `factor_sequence`<sup>Optional</sup> <a name="factor_sequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence"></a>

```python
factor_sequence: IResolvable | typing.List[PolicyRuleSignonFactorSequence]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]

factor_sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#factor_sequence PolicyRuleSignon#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider`<sup>Optional</sup> <a name="identity_provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

Apply rule based on the IdP used: `ANY`, `OKTA` or `SPECIFIC_IDP`.

Default: `ANY`. ~> **WARNING**: Use of `identity_provider` requires a feature flag to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#identity_provider PolicyRuleSignon#identity_provider}

---

##### `identity_provider_ids`<sup>Optional</sup> <a name="identity_provider_ids" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds"></a>

```python
identity_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

When identity_provider is `SPECIFIC_IDP` then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#identity_provider_ids PolicyRuleSignon#identity_provider_ids}

---

##### `mfa_lifetime`<sup>Optional</sup> <a name="mfa_lifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime"></a>

```python
mfa_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#mfa_lifetime PolicyRuleSignon#mfa_lifetime}

---

##### `mfa_prompt`<sup>Optional</sup> <a name="mfa_prompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt"></a>

```python
mfa_prompt: str
```

- *Type:* str

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: `DEVICE`, `SESSION` or`ALWAYS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#mfa_prompt PolicyRuleSignon#mfa_prompt}

---

##### `mfa_remember_device`<sup>Optional</sup> <a name="mfa_remember_device" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice"></a>

```python
mfa_remember_device: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Remember MFA device. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#mfa_remember_device PolicyRuleSignon#mfa_remember_device}

---

##### `mfa_required`<sup>Optional</sup> <a name="mfa_required" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired"></a>

```python
mfa_required: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Require MFA. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#mfa_required PolicyRuleSignon#mfa_required}

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#network_connection PolicyRuleSignon#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#network_excludes PolicyRuleSignon#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

Required if `network_connection` = `ZONE`. Indicates the network zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#network_includes PolicyRuleSignon#network_includes}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#policy_id PolicyRuleSignon#policy_id}

---

##### `primary_factor`<sup>Optional</sup> <a name="primary_factor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor"></a>

```python
primary_factor: str
```

- *Type:* str

Rule's primary factor. **WARNING** Ony works as a part of the Identity Engine. Valid values: `PASSWORD_IDP_ANY_FACTOR`, `PASSWORD_IDP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#primary_factor PolicyRuleSignon#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rule priority.

This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#priority PolicyRuleSignon#priority}

---

##### `risc_level`<sup>Optional</sup> <a name="risc_level" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel"></a>

```python
risc_level: str
```

- *Type:* str

Risc level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#risc_level PolicyRuleSignon#risc_level}

---

##### `risk_level`<sup>Optional</sup> <a name="risk_level" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riskLevel"></a>

```python
risk_level: str
```

- *Type:* str

Risk level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#risk_level PolicyRuleSignon#risk_level}

---

##### `session_idle`<sup>Optional</sup> <a name="session_idle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle"></a>

```python
session_idle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max minutes a session can be idle. Default: `120`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#session_idle PolicyRuleSignon#session_idle}

---

##### `session_lifetime`<sup>Optional</sup> <a name="session_lifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime"></a>

```python
session_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max minutes a session is active: Disable = 0. Default: `120`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#session_lifetime PolicyRuleSignon#session_lifetime}

---

##### `session_persistent`<sup>Optional</sup> <a name="session_persistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent"></a>

```python
session_persistent: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#session_persistent PolicyRuleSignon#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#status PolicyRuleSignon#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#users_excluded PolicyRuleSignon#users_excluded}

---

### PolicyRuleSignonFactorSequence <a name="PolicyRuleSignonFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignonFactorSequence(
  primary_criteria_factor_type: str,
  primary_criteria_provider: str,
  secondary_criteria: IResolvable | typing.List[PolicyRuleSignonFactorSequenceSecondaryCriteria] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType">primary_criteria_factor_type</a></code> | <code>str</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider">primary_criteria_provider</a></code> | <code>str</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria">secondary_criteria</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>]</code> | secondary_criteria block. |

---

##### `primary_criteria_factor_type`<sup>Required</sup> <a name="primary_criteria_factor_type" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType"></a>

```python
primary_criteria_factor_type: str
```

- *Type:* str

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#primary_criteria_factor_type PolicyRuleSignon#primary_criteria_factor_type}

---

##### `primary_criteria_provider`<sup>Required</sup> <a name="primary_criteria_provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider"></a>

```python
primary_criteria_provider: str
```

- *Type:* str

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#primary_criteria_provider PolicyRuleSignon#primary_criteria_provider}

---

##### `secondary_criteria`<sup>Optional</sup> <a name="secondary_criteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria"></a>

```python
secondary_criteria: IResolvable | typing.List[PolicyRuleSignonFactorSequenceSecondaryCriteria]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>]

secondary_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#secondary_criteria PolicyRuleSignon#secondary_criteria}

---

### PolicyRuleSignonFactorSequenceSecondaryCriteria <a name="PolicyRuleSignonFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria(
  factor_type: str,
  provider: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType">factor_type</a></code> | <code>str</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider">provider</a></code> | <code>str</code> | Factor provider. |

---

##### `factor_type`<sup>Required</sup> <a name="factor_type" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType"></a>

```python
factor_type: str
```

- *Type:* str

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#factor_type PolicyRuleSignon#factor_type}

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider"></a>

```python
provider: str
```

- *Type:* str

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_signon#provider PolicyRuleSignon#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleSignonFactorSequenceList <a name="PolicyRuleSignonFactorSequenceList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignonFactorSequenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleSignonFactorSequenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PolicyRuleSignonFactorSequence]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>]

---


### PolicyRuleSignonFactorSequenceOutputReference <a name="PolicyRuleSignonFactorSequenceOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria">put_secondary_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria">reset_secondary_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secondary_criteria` <a name="put_secondary_criteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria"></a>

```python
def put_secondary_criteria(
  value: IResolvable | typing.List[PolicyRuleSignonFactorSequenceSecondaryCriteria]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>]

---

##### `reset_secondary_criteria` <a name="reset_secondary_criteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```python
def reset_secondary_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria">secondary_criteria</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">primary_criteria_factor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput">primary_criteria_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput">secondary_criteria_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType">primary_criteria_factor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider">primary_criteria_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secondary_criteria`<sup>Required</sup> <a name="secondary_criteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria"></a>

```python
secondary_criteria: PolicyRuleSignonFactorSequenceSecondaryCriteriaList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a>

---

##### `primary_criteria_factor_type_input`<sup>Optional</sup> <a name="primary_criteria_factor_type_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```python
primary_criteria_factor_type_input: str
```

- *Type:* str

---

##### `primary_criteria_provider_input`<sup>Optional</sup> <a name="primary_criteria_provider_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```python
primary_criteria_provider_input: str
```

- *Type:* str

---

##### `secondary_criteria_input`<sup>Optional</sup> <a name="secondary_criteria_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```python
secondary_criteria_input: IResolvable | typing.List[PolicyRuleSignonFactorSequenceSecondaryCriteria]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>]

---

##### `primary_criteria_factor_type`<sup>Required</sup> <a name="primary_criteria_factor_type" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```python
primary_criteria_factor_type: str
```

- *Type:* str

---

##### `primary_criteria_provider`<sup>Required</sup> <a name="primary_criteria_provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```python
primary_criteria_provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PolicyRuleSignonFactorSequence
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaList <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PolicyRuleSignonFactorSequenceSecondaryCriteria]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>]

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_signon

policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">factor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType">factor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `factor_type_input`<sup>Optional</sup> <a name="factor_type_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```python
factor_type_input: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `factor_type`<sup>Required</sup> <a name="factor_type" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```python
factor_type: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PolicyRuleSignonFactorSequenceSecondaryCriteria
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>

---



