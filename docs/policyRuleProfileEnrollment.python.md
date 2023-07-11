# `okta_policy_rule_profile_enrollment`

Refer to the Terraform Registory for docs: [`okta_policy_rule_profile_enrollment`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment).

# `policyRuleProfileEnrollment` Submodule <a name="`policyRuleProfileEnrollment` Submodule" id="@cdktf/provider-okta.policyRuleProfileEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleProfileEnrollment <a name="PolicyRuleProfileEnrollment" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment okta_policy_rule_profile_enrollment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_profile_enrollment

policyRuleProfileEnrollment.PolicyRuleProfileEnrollment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  unknown_user_action: str,
  access: str = None,
  email_verification: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inline_hook_id: str = None,
  profile_attributes: typing.Union[IResolvable, typing.List[PolicyRuleProfileEnrollmentProfileAttributes]] = None,
  target_group_id: str = None,
  ui_schema_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.unknownUserAction">unknown_user_action</a></code> | <code>str</code> | Which action should be taken if this User is new. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.access">access</a></code> | <code>str</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.emailVerification">email_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether email verification should occur before access is granted. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.inlineHookId">inline_hook_id</a></code> | <code>str</code> | ID of a Registration Inline Hook. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.profileAttributes">profile_attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]</code> | profile_attributes block. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.targetGroupId">target_group_id</a></code> | <code>str</code> | The ID of a Group that this User should be added to. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.uiSchemaId">ui_schema_id</a></code> | <code>str</code> | Value created by the backend. If present all policy updates must include this attribute/value. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.policyId"></a>

- *Type:* str

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#policy_id PolicyRuleProfileEnrollment#policy_id}

---

##### `unknown_user_action`<sup>Required</sup> <a name="unknown_user_action" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.unknownUserAction"></a>

- *Type:* str

Which action should be taken if this User is new.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#unknown_user_action PolicyRuleProfileEnrollment#unknown_user_action}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.access"></a>

- *Type:* str

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#access PolicyRuleProfileEnrollment#access}

---

##### `email_verification`<sup>Optional</sup> <a name="email_verification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.emailVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether email verification should occur before access is granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#email_verification PolicyRuleProfileEnrollment#email_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inline_hook_id`<sup>Optional</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.inlineHookId"></a>

- *Type:* str

ID of a Registration Inline Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#inline_hook_id PolicyRuleProfileEnrollment#inline_hook_id}

---

##### `profile_attributes`<sup>Optional</sup> <a name="profile_attributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.profileAttributes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]

profile_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#profile_attributes PolicyRuleProfileEnrollment#profile_attributes}

---

##### `target_group_id`<sup>Optional</sup> <a name="target_group_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.targetGroupId"></a>

- *Type:* str

The ID of a Group that this User should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#target_group_id PolicyRuleProfileEnrollment#target_group_id}

---

##### `ui_schema_id`<sup>Optional</sup> <a name="ui_schema_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.uiSchemaId"></a>

- *Type:* str

Value created by the backend. If present all policy updates must include this attribute/value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#ui_schema_id PolicyRuleProfileEnrollment#ui_schema_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes">put_profile_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetEmailVerification">reset_email_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetInlineHookId">reset_inline_hook_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetProfileAttributes">reset_profile_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetTargetGroupId">reset_target_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetUiSchemaId">reset_ui_schema_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_profile_attributes` <a name="put_profile_attributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes"></a>

```python
def put_profile_attributes(
  value: typing.Union[IResolvable, typing.List[PolicyRuleProfileEnrollmentProfileAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_email_verification` <a name="reset_email_verification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetEmailVerification"></a>

```python
def reset_email_verification() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inline_hook_id` <a name="reset_inline_hook_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetInlineHookId"></a>

```python
def reset_inline_hook_id() -> None
```

##### `reset_profile_attributes` <a name="reset_profile_attributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetProfileAttributes"></a>

```python
def reset_profile_attributes() -> None
```

##### `reset_target_group_id` <a name="reset_target_group_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetTargetGroupId"></a>

```python
def reset_target_group_id() -> None
```

##### `reset_ui_schema_id` <a name="reset_ui_schema_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetUiSchemaId"></a>

```python
def reset_ui_schema_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_profile_enrollment

policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_profile_enrollment

policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_profile_enrollment

policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributes">profile_attributes</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList">PolicyRuleProfileEnrollmentProfileAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerificationInput">email_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookIdInput">inline_hook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributesInput">profile_attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupIdInput">target_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaIdInput">ui_schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserActionInput">unknown_user_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerification">email_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupId">target_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaId">ui_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserAction">unknown_user_action</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_attributes`<sup>Required</sup> <a name="profile_attributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributes"></a>

```python
profile_attributes: PolicyRuleProfileEnrollmentProfileAttributesList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList">PolicyRuleProfileEnrollmentProfileAttributesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `email_verification_input`<sup>Optional</sup> <a name="email_verification_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerificationInput"></a>

```python
email_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inline_hook_id_input`<sup>Optional</sup> <a name="inline_hook_id_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookIdInput"></a>

```python
inline_hook_id_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `profile_attributes_input`<sup>Optional</sup> <a name="profile_attributes_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributesInput"></a>

```python
profile_attributes_input: typing.Union[IResolvable, typing.List[PolicyRuleProfileEnrollmentProfileAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]

---

##### `target_group_id_input`<sup>Optional</sup> <a name="target_group_id_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupIdInput"></a>

```python
target_group_id_input: str
```

- *Type:* str

---

##### `ui_schema_id_input`<sup>Optional</sup> <a name="ui_schema_id_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaIdInput"></a>

```python
ui_schema_id_input: str
```

- *Type:* str

---

##### `unknown_user_action_input`<sup>Optional</sup> <a name="unknown_user_action_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserActionInput"></a>

```python
unknown_user_action_input: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `email_verification`<sup>Required</sup> <a name="email_verification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerification"></a>

```python
email_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inline_hook_id`<sup>Required</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `target_group_id`<sup>Required</sup> <a name="target_group_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupId"></a>

```python
target_group_id: str
```

- *Type:* str

---

##### `ui_schema_id`<sup>Required</sup> <a name="ui_schema_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaId"></a>

```python
ui_schema_id: str
```

- *Type:* str

---

##### `unknown_user_action`<sup>Required</sup> <a name="unknown_user_action" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserAction"></a>

```python
unknown_user_action: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleProfileEnrollmentConfig <a name="PolicyRuleProfileEnrollmentConfig" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_profile_enrollment

policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  unknown_user_action: str,
  access: str = None,
  email_verification: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inline_hook_id: str = None,
  profile_attributes: typing.Union[IResolvable, typing.List[PolicyRuleProfileEnrollmentProfileAttributes]] = None,
  target_group_id: str = None,
  ui_schema_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.policyId">policy_id</a></code> | <code>str</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.unknownUserAction">unknown_user_action</a></code> | <code>str</code> | Which action should be taken if this User is new. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.access">access</a></code> | <code>str</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.emailVerification">email_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether email verification should occur before access is granted. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | ID of a Registration Inline Hook. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.profileAttributes">profile_attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]</code> | profile_attributes block. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.targetGroupId">target_group_id</a></code> | <code>str</code> | The ID of a Group that this User should be added to. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.uiSchemaId">ui_schema_id</a></code> | <code>str</code> | Value created by the backend. If present all policy updates must include this attribute/value. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#policy_id PolicyRuleProfileEnrollment#policy_id}

---

##### `unknown_user_action`<sup>Required</sup> <a name="unknown_user_action" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.unknownUserAction"></a>

```python
unknown_user_action: str
```

- *Type:* str

Which action should be taken if this User is new.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#unknown_user_action PolicyRuleProfileEnrollment#unknown_user_action}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.access"></a>

```python
access: str
```

- *Type:* str

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#access PolicyRuleProfileEnrollment#access}

---

##### `email_verification`<sup>Optional</sup> <a name="email_verification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.emailVerification"></a>

```python
email_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether email verification should occur before access is granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#email_verification PolicyRuleProfileEnrollment#email_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inline_hook_id`<sup>Optional</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

ID of a Registration Inline Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#inline_hook_id PolicyRuleProfileEnrollment#inline_hook_id}

---

##### `profile_attributes`<sup>Optional</sup> <a name="profile_attributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.profileAttributes"></a>

```python
profile_attributes: typing.Union[IResolvable, typing.List[PolicyRuleProfileEnrollmentProfileAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]

profile_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#profile_attributes PolicyRuleProfileEnrollment#profile_attributes}

---

##### `target_group_id`<sup>Optional</sup> <a name="target_group_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.targetGroupId"></a>

```python
target_group_id: str
```

- *Type:* str

The ID of a Group that this User should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#target_group_id PolicyRuleProfileEnrollment#target_group_id}

---

##### `ui_schema_id`<sup>Optional</sup> <a name="ui_schema_id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.uiSchemaId"></a>

```python
ui_schema_id: str
```

- *Type:* str

Value created by the backend. If present all policy updates must include this attribute/value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#ui_schema_id PolicyRuleProfileEnrollment#ui_schema_id}

---

### PolicyRuleProfileEnrollmentProfileAttributes <a name="PolicyRuleProfileEnrollmentProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_profile_enrollment

policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes(
  label: str,
  name: str,
  required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.label">label</a></code> | <code>str</code> | A display-friendly label for this property. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.name">name</a></code> | <code>str</code> | The name of a User Profile property. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if this property is required for enrollment. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.label"></a>

```python
label: str
```

- *Type:* str

A display-friendly label for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#label PolicyRuleProfileEnrollment#label}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

The name of a User Profile property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#name PolicyRuleProfileEnrollment#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if this property is required for enrollment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_rule_profile_enrollment#required PolicyRuleProfileEnrollment#required}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleProfileEnrollmentProfileAttributesList <a name="PolicyRuleProfileEnrollmentProfileAttributesList" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_profile_enrollment

policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleProfileEnrollmentProfileAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PolicyRuleProfileEnrollmentProfileAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]]

---


### PolicyRuleProfileEnrollmentProfileAttributesOutputReference <a name="PolicyRuleProfileEnrollmentProfileAttributesOutputReference" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_profile_enrollment

policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_required` <a name="reset_required" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PolicyRuleProfileEnrollmentProfileAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>]

---



