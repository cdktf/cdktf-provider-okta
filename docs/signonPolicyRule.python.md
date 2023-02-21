# `signonPolicyRule` Submodule <a name="`signonPolicyRule` Submodule" id="@cdktf/provider-okta.signonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignonPolicyRule <a name="SignonPolicyRule" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule okta_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRule(
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
  access: str = None,
  authtype: str = None,
  behaviors: typing.List[str] = None,
  factor_sequence: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequence]] = None,
  id: str = None,
  identity_provider: str = None,
  identity_provider_ids: typing.List[str] = None,
  mfa_lifetime: typing.Union[int, float] = None,
  mfa_prompt: str = None,
  mfa_remember_device: typing.Union[bool, IResolvable] = None,
  mfa_required: typing.Union[bool, IResolvable] = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  policyid: str = None,
  policy_id: str = None,
  primary_factor: str = None,
  priority: typing.Union[int, float] = None,
  risc_level: str = None,
  session_idle: typing.Union[int, float] = None,
  session_lifetime: typing.Union[int, float] = None,
  session_persistent: typing.Union[bool, IResolvable] = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.access">access</a></code> | <code>str</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.authtype">authtype</a></code> | <code>str</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.factorSequence">factor_sequence</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.identityProvider">identity_provider</a></code> | <code>str</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.identityProviderIds">identity_provider_ids</a></code> | <code>typing.List[str]</code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaLifetime">mfa_lifetime</a></code> | <code>typing.Union[int, float]</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaPrompt">mfa_prompt</a></code> | <code>str</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaRememberDevice">mfa_remember_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaRequired">mfa_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.policyid">policyid</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.primaryFactor">primary_factor</a></code> | <code>str</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.riscLevel">risc_level</a></code> | <code>str</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionIdle">session_idle</a></code> | <code>typing.Union[int, float]</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionLifetime">session_lifetime</a></code> | <code>typing.Union[int, float]</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionPersistent">session_persistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.name"></a>

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#name SignonPolicyRule#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.access"></a>

- *Type:* str

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#access SignonPolicyRule#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.authtype"></a>

- *Type:* str

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#authtype SignonPolicyRule#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.behaviors"></a>

- *Type:* typing.List[str]

List of behavior IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#behaviors SignonPolicyRule#behaviors}

---

##### `factor_sequence`<sup>Optional</sup> <a name="factor_sequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.factorSequence"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]

factor_sequence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_sequence SignonPolicyRule#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider`<sup>Optional</sup> <a name="identity_provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.identityProvider"></a>

- *Type:* str

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider SignonPolicyRule#identity_provider}

---

##### `identity_provider_ids`<sup>Optional</sup> <a name="identity_provider_ids" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.identityProviderIds"></a>

- *Type:* typing.List[str]

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider_ids SignonPolicyRule#identity_provider_ids}

---

##### `mfa_lifetime`<sup>Optional</sup> <a name="mfa_lifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaLifetime"></a>

- *Type:* typing.Union[int, float]

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_lifetime SignonPolicyRule#mfa_lifetime}

---

##### `mfa_prompt`<sup>Optional</sup> <a name="mfa_prompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaPrompt"></a>

- *Type:* str

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_prompt SignonPolicyRule#mfa_prompt}

---

##### `mfa_remember_device`<sup>Optional</sup> <a name="mfa_remember_device" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaRememberDevice"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Remember MFA device.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_remember_device SignonPolicyRule#mfa_remember_device}

---

##### `mfa_required`<sup>Optional</sup> <a name="mfa_required" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require MFA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_required SignonPolicyRule#mfa_required}

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkConnection"></a>

- *Type:* str

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_connection SignonPolicyRule#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkExcludes"></a>

- *Type:* typing.List[str]

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_excludes SignonPolicyRule#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkIncludes"></a>

- *Type:* typing.List[str]

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_includes SignonPolicyRule#network_includes}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.policyid"></a>

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policyid SignonPolicyRule#policyid}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policy_id SignonPolicyRule#policy_id}

---

##### `primary_factor`<sup>Optional</sup> <a name="primary_factor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.primaryFactor"></a>

- *Type:* str

Primary factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_factor SignonPolicyRule#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#priority SignonPolicyRule#priority}

---

##### `risc_level`<sup>Optional</sup> <a name="risc_level" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.riscLevel"></a>

- *Type:* str

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#risc_level SignonPolicyRule#risc_level}

---

##### `session_idle`<sup>Optional</sup> <a name="session_idle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionIdle"></a>

- *Type:* typing.Union[int, float]

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_idle SignonPolicyRule#session_idle}

---

##### `session_lifetime`<sup>Optional</sup> <a name="session_lifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionLifetime"></a>

- *Type:* typing.Union[int, float]

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_lifetime SignonPolicyRule#session_lifetime}

---

##### `session_persistent`<sup>Optional</sup> <a name="session_persistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionPersistent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_persistent SignonPolicyRule#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.status"></a>

- *Type:* str

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#status SignonPolicyRule#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.usersExcluded"></a>

- *Type:* typing.List[str]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#users_excluded SignonPolicyRule#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence">put_factor_sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAuthtype">reset_authtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetBehaviors">reset_behaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetFactorSequence">reset_factor_sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProvider">reset_identity_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProviderIds">reset_identity_provider_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaLifetime">reset_mfa_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaPrompt">reset_mfa_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRememberDevice">reset_mfa_remember_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRequired">reset_mfa_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkConnection">reset_network_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkExcludes">reset_network_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkIncludes">reset_network_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyid">reset_policyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPrimaryFactor">reset_primary_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetRiscLevel">reset_risc_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionIdle">reset_session_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionLifetime">reset_session_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionPersistent">reset_session_persistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetUsersExcluded">reset_users_excluded</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_factor_sequence` <a name="put_factor_sequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence"></a>

```python
def put_factor_sequence(
  value: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequence]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_authtype` <a name="reset_authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAuthtype"></a>

```python
def reset_authtype() -> None
```

##### `reset_behaviors` <a name="reset_behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetBehaviors"></a>

```python
def reset_behaviors() -> None
```

##### `reset_factor_sequence` <a name="reset_factor_sequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetFactorSequence"></a>

```python
def reset_factor_sequence() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider` <a name="reset_identity_provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProvider"></a>

```python
def reset_identity_provider() -> None
```

##### `reset_identity_provider_ids` <a name="reset_identity_provider_ids" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProviderIds"></a>

```python
def reset_identity_provider_ids() -> None
```

##### `reset_mfa_lifetime` <a name="reset_mfa_lifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaLifetime"></a>

```python
def reset_mfa_lifetime() -> None
```

##### `reset_mfa_prompt` <a name="reset_mfa_prompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaPrompt"></a>

```python
def reset_mfa_prompt() -> None
```

##### `reset_mfa_remember_device` <a name="reset_mfa_remember_device" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRememberDevice"></a>

```python
def reset_mfa_remember_device() -> None
```

##### `reset_mfa_required` <a name="reset_mfa_required" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRequired"></a>

```python
def reset_mfa_required() -> None
```

##### `reset_network_connection` <a name="reset_network_connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkConnection"></a>

```python
def reset_network_connection() -> None
```

##### `reset_network_excludes` <a name="reset_network_excludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkExcludes"></a>

```python
def reset_network_excludes() -> None
```

##### `reset_network_includes` <a name="reset_network_includes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkIncludes"></a>

```python
def reset_network_includes() -> None
```

##### `reset_policyid` <a name="reset_policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyid"></a>

```python
def reset_policyid() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_primary_factor` <a name="reset_primary_factor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPrimaryFactor"></a>

```python
def reset_primary_factor() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_risc_level` <a name="reset_risc_level" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetRiscLevel"></a>

```python
def reset_risc_level() -> None
```

##### `reset_session_idle` <a name="reset_session_idle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionIdle"></a>

```python
def reset_session_idle() -> None
```

##### `reset_session_lifetime` <a name="reset_session_lifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionLifetime"></a>

```python
def reset_session_lifetime() -> None
```

##### `reset_session_persistent` <a name="reset_session_persistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionPersistent"></a>

```python
def reset_session_persistent() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_users_excluded` <a name="reset_users_excluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetUsersExcluded"></a>

```python
def reset_users_excluded() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequence">factor_sequence</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList">SignonPolicyRuleFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtypeInput">authtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviorsInput">behaviors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequenceInput">factor_sequence_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIdsInput">identity_provider_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderInput">identity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetimeInput">mfa_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPromptInput">mfa_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDeviceInput">mfa_remember_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequiredInput">mfa_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnectionInput">network_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludesInput">network_excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludesInput">network_includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyidInput">policyid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactorInput">primary_factor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevelInput">risc_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdleInput">session_idle_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetimeInput">session_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistentInput">session_persistent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcludedInput">users_excluded_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtype">authtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProvider">identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIds">identity_provider_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetime">mfa_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPrompt">mfa_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDevice">mfa_remember_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequired">mfa_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnection">network_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyid">policyid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactor">primary_factor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevel">risc_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdle">session_idle</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetime">session_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistent">session_persistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `factor_sequence`<sup>Required</sup> <a name="factor_sequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequence"></a>

```python
factor_sequence: SignonPolicyRuleFactorSequenceList
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList">SignonPolicyRuleFactorSequenceList</a>

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `authtype_input`<sup>Optional</sup> <a name="authtype_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtypeInput"></a>

```python
authtype_input: str
```

- *Type:* str

---

##### `behaviors_input`<sup>Optional</sup> <a name="behaviors_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviorsInput"></a>

```python
behaviors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `factor_sequence_input`<sup>Optional</sup> <a name="factor_sequence_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequenceInput"></a>

```python
factor_sequence_input: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]

---

##### `identity_provider_ids_input`<sup>Optional</sup> <a name="identity_provider_ids_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIdsInput"></a>

```python
identity_provider_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_input`<sup>Optional</sup> <a name="identity_provider_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderInput"></a>

```python
identity_provider_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mfa_lifetime_input`<sup>Optional</sup> <a name="mfa_lifetime_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetimeInput"></a>

```python
mfa_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mfa_prompt_input`<sup>Optional</sup> <a name="mfa_prompt_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPromptInput"></a>

```python
mfa_prompt_input: str
```

- *Type:* str

---

##### `mfa_remember_device_input`<sup>Optional</sup> <a name="mfa_remember_device_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDeviceInput"></a>

```python
mfa_remember_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mfa_required_input`<sup>Optional</sup> <a name="mfa_required_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequiredInput"></a>

```python
mfa_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_connection_input`<sup>Optional</sup> <a name="network_connection_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnectionInput"></a>

```python
network_connection_input: str
```

- *Type:* str

---

##### `network_excludes_input`<sup>Optional</sup> <a name="network_excludes_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludesInput"></a>

```python
network_excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes_input`<sup>Optional</sup> <a name="network_includes_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludesInput"></a>

```python
network_includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policyid_input`<sup>Optional</sup> <a name="policyid_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyidInput"></a>

```python
policyid_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `primary_factor_input`<sup>Optional</sup> <a name="primary_factor_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactorInput"></a>

```python
primary_factor_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `risc_level_input`<sup>Optional</sup> <a name="risc_level_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevelInput"></a>

```python
risc_level_input: str
```

- *Type:* str

---

##### `session_idle_input`<sup>Optional</sup> <a name="session_idle_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdleInput"></a>

```python
session_idle_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_lifetime_input`<sup>Optional</sup> <a name="session_lifetime_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetimeInput"></a>

```python
session_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_persistent_input`<sup>Optional</sup> <a name="session_persistent_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistentInput"></a>

```python
session_persistent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `users_excluded_input`<sup>Optional</sup> <a name="users_excluded_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcludedInput"></a>

```python
users_excluded_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `authtype`<sup>Required</sup> <a name="authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtype"></a>

```python
authtype: str
```

- *Type:* str

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

---

##### `identity_provider_ids`<sup>Required</sup> <a name="identity_provider_ids" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIds"></a>

```python
identity_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mfa_lifetime`<sup>Required</sup> <a name="mfa_lifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetime"></a>

```python
mfa_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mfa_prompt`<sup>Required</sup> <a name="mfa_prompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPrompt"></a>

```python
mfa_prompt: str
```

- *Type:* str

---

##### `mfa_remember_device`<sup>Required</sup> <a name="mfa_remember_device" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDevice"></a>

```python
mfa_remember_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mfa_required`<sup>Required</sup> <a name="mfa_required" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequired"></a>

```python
mfa_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_connection`<sup>Required</sup> <a name="network_connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

---

##### `network_excludes`<sup>Required</sup> <a name="network_excludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes`<sup>Required</sup> <a name="network_includes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policyid`<sup>Required</sup> <a name="policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyid"></a>

```python
policyid: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `primary_factor`<sup>Required</sup> <a name="primary_factor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactor"></a>

```python
primary_factor: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `risc_level`<sup>Required</sup> <a name="risc_level" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevel"></a>

```python
risc_level: str
```

- *Type:* str

---

##### `session_idle`<sup>Required</sup> <a name="session_idle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdle"></a>

```python
session_idle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_lifetime`<sup>Required</sup> <a name="session_lifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetime"></a>

```python
session_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_persistent`<sup>Required</sup> <a name="session_persistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistent"></a>

```python
session_persistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `users_excluded`<sup>Required</sup> <a name="users_excluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SignonPolicyRuleConfig <a name="SignonPolicyRuleConfig" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access: str = None,
  authtype: str = None,
  behaviors: typing.List[str] = None,
  factor_sequence: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequence]] = None,
  id: str = None,
  identity_provider: str = None,
  identity_provider_ids: typing.List[str] = None,
  mfa_lifetime: typing.Union[int, float] = None,
  mfa_prompt: str = None,
  mfa_remember_device: typing.Union[bool, IResolvable] = None,
  mfa_required: typing.Union[bool, IResolvable] = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  policyid: str = None,
  policy_id: str = None,
  primary_factor: str = None,
  priority: typing.Union[int, float] = None,
  risc_level: str = None,
  session_idle: typing.Union[int, float] = None,
  session_lifetime: typing.Union[int, float] = None,
  session_persistent: typing.Union[bool, IResolvable] = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.access">access</a></code> | <code>str</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.authtype">authtype</a></code> | <code>str</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.factorSequence">factor_sequence</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProvider">identity_provider</a></code> | <code>str</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProviderIds">identity_provider_ids</a></code> | <code>typing.List[str]</code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaLifetime">mfa_lifetime</a></code> | <code>typing.Union[int, float]</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaPrompt">mfa_prompt</a></code> | <code>str</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRememberDevice">mfa_remember_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRequired">mfa_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyid">policyid</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.primaryFactor">primary_factor</a></code> | <code>str</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.riscLevel">risc_level</a></code> | <code>str</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionIdle">session_idle</a></code> | <code>typing.Union[int, float]</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionLifetime">session_lifetime</a></code> | <code>typing.Union[int, float]</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionPersistent">session_persistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.status">status</a></code> | <code>str</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#name SignonPolicyRule#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.access"></a>

```python
access: str
```

- *Type:* str

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#access SignonPolicyRule#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.authtype"></a>

```python
authtype: str
```

- *Type:* str

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#authtype SignonPolicyRule#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

List of behavior IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#behaviors SignonPolicyRule#behaviors}

---

##### `factor_sequence`<sup>Optional</sup> <a name="factor_sequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.factorSequence"></a>

```python
factor_sequence: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]

factor_sequence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_sequence SignonPolicyRule#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider`<sup>Optional</sup> <a name="identity_provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider SignonPolicyRule#identity_provider}

---

##### `identity_provider_ids`<sup>Optional</sup> <a name="identity_provider_ids" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProviderIds"></a>

```python
identity_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider_ids SignonPolicyRule#identity_provider_ids}

---

##### `mfa_lifetime`<sup>Optional</sup> <a name="mfa_lifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaLifetime"></a>

```python
mfa_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_lifetime SignonPolicyRule#mfa_lifetime}

---

##### `mfa_prompt`<sup>Optional</sup> <a name="mfa_prompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaPrompt"></a>

```python
mfa_prompt: str
```

- *Type:* str

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_prompt SignonPolicyRule#mfa_prompt}

---

##### `mfa_remember_device`<sup>Optional</sup> <a name="mfa_remember_device" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRememberDevice"></a>

```python
mfa_remember_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Remember MFA device.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_remember_device SignonPolicyRule#mfa_remember_device}

---

##### `mfa_required`<sup>Optional</sup> <a name="mfa_required" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRequired"></a>

```python
mfa_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require MFA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_required SignonPolicyRule#mfa_required}

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_connection SignonPolicyRule#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_excludes SignonPolicyRule#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_includes SignonPolicyRule#network_includes}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyid"></a>

```python
policyid: str
```

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policyid SignonPolicyRule#policyid}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policy_id SignonPolicyRule#policy_id}

---

##### `primary_factor`<sup>Optional</sup> <a name="primary_factor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.primaryFactor"></a>

```python
primary_factor: str
```

- *Type:* str

Primary factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_factor SignonPolicyRule#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#priority SignonPolicyRule#priority}

---

##### `risc_level`<sup>Optional</sup> <a name="risc_level" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.riscLevel"></a>

```python
risc_level: str
```

- *Type:* str

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#risc_level SignonPolicyRule#risc_level}

---

##### `session_idle`<sup>Optional</sup> <a name="session_idle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionIdle"></a>

```python
session_idle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_idle SignonPolicyRule#session_idle}

---

##### `session_lifetime`<sup>Optional</sup> <a name="session_lifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionLifetime"></a>

```python
session_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_lifetime SignonPolicyRule#session_lifetime}

---

##### `session_persistent`<sup>Optional</sup> <a name="session_persistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionPersistent"></a>

```python
session_persistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_persistent SignonPolicyRule#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#status SignonPolicyRule#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#users_excluded SignonPolicyRule#users_excluded}

---

### SignonPolicyRuleFactorSequence <a name="SignonPolicyRuleFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRuleFactorSequence(
  primary_criteria_factor_type: str,
  primary_criteria_provider: str,
  secondary_criteria: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequenceSecondaryCriteria]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaFactorType">primary_criteria_factor_type</a></code> | <code>str</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaProvider">primary_criteria_provider</a></code> | <code>str</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.secondaryCriteria">secondary_criteria</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>]]</code> | secondary_criteria block. |

---

##### `primary_criteria_factor_type`<sup>Required</sup> <a name="primary_criteria_factor_type" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaFactorType"></a>

```python
primary_criteria_factor_type: str
```

- *Type:* str

Type of a Factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_factor_type SignonPolicyRule#primary_criteria_factor_type}

---

##### `primary_criteria_provider`<sup>Required</sup> <a name="primary_criteria_provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaProvider"></a>

```python
primary_criteria_provider: str
```

- *Type:* str

Factor provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_provider SignonPolicyRule#primary_criteria_provider}

---

##### `secondary_criteria`<sup>Optional</sup> <a name="secondary_criteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.secondaryCriteria"></a>

```python
secondary_criteria: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequenceSecondaryCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>]]

secondary_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#secondary_criteria SignonPolicyRule#secondary_criteria}

---

### SignonPolicyRuleFactorSequenceSecondaryCriteria <a name="SignonPolicyRuleFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria(
  factor_type: str,
  provider: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.factorType">factor_type</a></code> | <code>str</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.provider">provider</a></code> | <code>str</code> | Factor provider. |

---

##### `factor_type`<sup>Required</sup> <a name="factor_type" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.factorType"></a>

```python
factor_type: str
```

- *Type:* str

Type of a Factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_type SignonPolicyRule#factor_type}

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.provider"></a>

```python
provider: str
```

- *Type:* str

Factor provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#provider SignonPolicyRule#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### SignonPolicyRuleFactorSequenceList <a name="SignonPolicyRuleFactorSequenceList" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRuleFactorSequenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignonPolicyRuleFactorSequenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>]]

---


### SignonPolicyRuleFactorSequenceOutputReference <a name="SignonPolicyRuleFactorSequenceOutputReference" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria">put_secondary_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resetSecondaryCriteria">reset_secondary_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secondary_criteria` <a name="put_secondary_criteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria"></a>

```python
def put_secondary_criteria(
  value: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequenceSecondaryCriteria]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>]]

---

##### `reset_secondary_criteria` <a name="reset_secondary_criteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```python
def reset_secondary_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteria">secondary_criteria</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList">SignonPolicyRuleFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">primary_criteria_factor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProviderInput">primary_criteria_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteriaInput">secondary_criteria_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorType">primary_criteria_factor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProvider">primary_criteria_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secondary_criteria`<sup>Required</sup> <a name="secondary_criteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteria"></a>

```python
secondary_criteria: SignonPolicyRuleFactorSequenceSecondaryCriteriaList
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList">SignonPolicyRuleFactorSequenceSecondaryCriteriaList</a>

---

##### `primary_criteria_factor_type_input`<sup>Optional</sup> <a name="primary_criteria_factor_type_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```python
primary_criteria_factor_type_input: str
```

- *Type:* str

---

##### `primary_criteria_provider_input`<sup>Optional</sup> <a name="primary_criteria_provider_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```python
primary_criteria_provider_input: str
```

- *Type:* str

---

##### `secondary_criteria_input`<sup>Optional</sup> <a name="secondary_criteria_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```python
secondary_criteria_input: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequenceSecondaryCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>]]

---

##### `primary_criteria_factor_type`<sup>Required</sup> <a name="primary_criteria_factor_type" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```python
primary_criteria_factor_type: str
```

- *Type:* str

---

##### `primary_criteria_provider`<sup>Required</sup> <a name="primary_criteria_provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```python
primary_criteria_provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SignonPolicyRuleFactorSequence, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>, cdktf.IResolvable]

---


### SignonPolicyRuleFactorSequenceSecondaryCriteriaList <a name="SignonPolicyRuleFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SignonPolicyRuleFactorSequenceSecondaryCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>]]

---


### SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference <a name="SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy_rule

signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">factor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorType">factor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `factor_type_input`<sup>Optional</sup> <a name="factor_type_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```python
factor_type_input: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `factor_type`<sup>Required</sup> <a name="factor_type" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```python
factor_type: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SignonPolicyRuleFactorSequenceSecondaryCriteria, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>, cdktf.IResolvable]

---



