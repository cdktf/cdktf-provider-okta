# `policyProfileEnrollmentApps` Submodule <a name="`policyProfileEnrollmentApps` Submodule" id="@cdktf/provider-okta.policyProfileEnrollmentApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyProfileEnrollmentApps <a name="PolicyProfileEnrollmentApps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps okta_policy_profile_enrollment_apps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_profile_enrollment_apps

policyProfileEnrollmentApps.PolicyProfileEnrollmentApps(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  apps: typing.List[str] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | ID of the enrollment policy. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.apps">apps</a></code> | <code>typing.List[str]</code> | List of app IDs to be added to this policy. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.policyId"></a>

- *Type:* str

ID of the enrollment policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#policy_id PolicyProfileEnrollmentApps#policy_id}

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.apps"></a>

- *Type:* typing.List[str]

List of app IDs to be added to this policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#apps PolicyProfileEnrollmentApps#apps}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetApps">reset_apps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_apps` <a name="reset_apps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetApps"></a>

```python
def reset_apps() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_profile_enrollment_apps

policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_profile_enrollment_apps

policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_profile_enrollment_apps

policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.defaultPolicyId">default_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.appsInput">apps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.apps">apps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_policy_id`<sup>Required</sup> <a name="default_policy_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.defaultPolicyId"></a>

```python
default_policy_id: str
```

- *Type:* str

---

##### `apps_input`<sup>Optional</sup> <a name="apps_input" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.appsInput"></a>

```python
apps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.apps"></a>

```python
apps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyProfileEnrollmentAppsConfig <a name="PolicyProfileEnrollmentAppsConfig" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_profile_enrollment_apps

policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  apps: typing.List[str] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.policyId">policy_id</a></code> | <code>str</code> | ID of the enrollment policy. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.apps">apps</a></code> | <code>typing.List[str]</code> | List of app IDs to be added to this policy. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

ID of the enrollment policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#policy_id PolicyProfileEnrollmentApps#policy_id}

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.apps"></a>

```python
apps: typing.List[str]
```

- *Type:* typing.List[str]

List of app IDs to be added to this policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#apps PolicyProfileEnrollmentApps#apps}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



