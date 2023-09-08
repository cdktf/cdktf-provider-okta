# `okta_behavior`

Refer to the Terraform Registory for docs: [`okta_behavior`](https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior).

# `behavior` Submodule <a name="`behavior` Submodule" id="@cdktf/provider-okta.behavior"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Behavior <a name="Behavior" id="@cdktf/provider-okta.behavior.Behavior"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior okta_behavior}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.behavior.Behavior.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import behavior

behavior.Behavior(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  id: str = None,
  location_granularity_type: str = None,
  number_of_authentications: typing.Union[int, float] = None,
  radius_from_location: typing.Union[int, float] = None,
  status: str = None,
  velocity: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.type">type</a></code> | <code>str</code> | Behavior type. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#id Behavior#id}. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.locationGranularityType">location_granularity_type</a></code> | <code>str</code> | Determines the method and level of detail used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.numberOfAuthentications">number_of_authentications</a></code> | <code>typing.Union[int, float]</code> | The number of recent authentications used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.radiusFromLocation">radius_from_location</a></code> | <code>typing.Union[int, float]</code> | Radius from location (in kilometers). |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.status">status</a></code> | <code>str</code> | Behavior status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.velocity">velocity</a></code> | <code>typing.Union[int, float]</code> | Velocity (in kilometers per hour). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.name"></a>

- *Type:* str

Name of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#name Behavior#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.type"></a>

- *Type:* str

Behavior type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#type Behavior#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#id Behavior#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_granularity_type`<sup>Optional</sup> <a name="location_granularity_type" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.locationGranularityType"></a>

- *Type:* str

Determines the method and level of detail used to evaluate the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#location_granularity_type Behavior#location_granularity_type}

---

##### `number_of_authentications`<sup>Optional</sup> <a name="number_of_authentications" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.numberOfAuthentications"></a>

- *Type:* typing.Union[int, float]

The number of recent authentications used to evaluate the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#number_of_authentications Behavior#number_of_authentications}

---

##### `radius_from_location`<sup>Optional</sup> <a name="radius_from_location" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.radiusFromLocation"></a>

- *Type:* typing.Union[int, float]

Radius from location (in kilometers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#radius_from_location Behavior#radius_from_location}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.status"></a>

- *Type:* str

Behavior status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#status Behavior#status}

---

##### `velocity`<sup>Optional</sup> <a name="velocity" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.velocity"></a>

- *Type:* typing.Union[int, float]

Velocity (in kilometers per hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#velocity Behavior#velocity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetLocationGranularityType">reset_location_granularity_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetNumberOfAuthentications">reset_number_of_authentications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetRadiusFromLocation">reset_radius_from_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetVelocity">reset_velocity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.behavior.Behavior.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.behavior.Behavior.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.behavior.Behavior.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.behavior.Behavior.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.behavior.Behavior.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.behavior.Behavior.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.behavior.Behavior.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.behavior.Behavior.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.behavior.Behavior.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.behavior.Behavior.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.behavior.Behavior.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.behavior.Behavior.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_granularity_type` <a name="reset_location_granularity_type" id="@cdktf/provider-okta.behavior.Behavior.resetLocationGranularityType"></a>

```python
def reset_location_granularity_type() -> None
```

##### `reset_number_of_authentications` <a name="reset_number_of_authentications" id="@cdktf/provider-okta.behavior.Behavior.resetNumberOfAuthentications"></a>

```python
def reset_number_of_authentications() -> None
```

##### `reset_radius_from_location` <a name="reset_radius_from_location" id="@cdktf/provider-okta.behavior.Behavior.resetRadiusFromLocation"></a>

```python
def reset_radius_from_location() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.behavior.Behavior.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_velocity` <a name="reset_velocity" id="@cdktf/provider-okta.behavior.Behavior.resetVelocity"></a>

```python
def reset_velocity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.behavior.Behavior.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import behavior

behavior.Behavior.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.behavior.Behavior.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import behavior

behavior.Behavior.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.behavior.Behavior.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import behavior

behavior.Behavior.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.locationGranularityTypeInput">location_granularity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthenticationsInput">number_of_authentications_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocationInput">radius_from_location_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.velocityInput">velocity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.locationGranularityType">location_granularity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthentications">number_of_authentications</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocation">radius_from_location</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.velocity">velocity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.behavior.Behavior.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.behavior.Behavior.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.behavior.Behavior.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.behavior.Behavior.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.behavior.Behavior.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.behavior.Behavior.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.behavior.Behavior.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.behavior.Behavior.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.behavior.Behavior.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.behavior.Behavior.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.behavior.Behavior.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.behavior.Behavior.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.Behavior.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.behavior.Behavior.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.behavior.Behavior.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_granularity_type_input`<sup>Optional</sup> <a name="location_granularity_type_input" id="@cdktf/provider-okta.behavior.Behavior.property.locationGranularityTypeInput"></a>

```python
location_granularity_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.behavior.Behavior.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `number_of_authentications_input`<sup>Optional</sup> <a name="number_of_authentications_input" id="@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthenticationsInput"></a>

```python
number_of_authentications_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `radius_from_location_input`<sup>Optional</sup> <a name="radius_from_location_input" id="@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocationInput"></a>

```python
radius_from_location_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.behavior.Behavior.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.behavior.Behavior.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `velocity_input`<sup>Optional</sup> <a name="velocity_input" id="@cdktf/provider-okta.behavior.Behavior.property.velocityInput"></a>

```python
velocity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_granularity_type`<sup>Required</sup> <a name="location_granularity_type" id="@cdktf/provider-okta.behavior.Behavior.property.locationGranularityType"></a>

```python
location_granularity_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.behavior.Behavior.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_authentications`<sup>Required</sup> <a name="number_of_authentications" id="@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthentications"></a>

```python
number_of_authentications: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `radius_from_location`<sup>Required</sup> <a name="radius_from_location" id="@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocation"></a>

```python
radius_from_location: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.behavior.Behavior.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.behavior.Behavior.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `velocity`<sup>Required</sup> <a name="velocity" id="@cdktf/provider-okta.behavior.Behavior.property.velocity"></a>

```python
velocity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.behavior.Behavior.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BehaviorConfig <a name="BehaviorConfig" id="@cdktf/provider-okta.behavior.BehaviorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.behavior.BehaviorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import behavior

behavior.BehaviorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  id: str = None,
  location_granularity_type: str = None,
  number_of_authentications: typing.Union[int, float] = None,
  radius_from_location: typing.Union[int, float] = None,
  status: str = None,
  velocity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.name">name</a></code> | <code>str</code> | Name of the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.type">type</a></code> | <code>str</code> | Behavior type. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#id Behavior#id}. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.locationGranularityType">location_granularity_type</a></code> | <code>str</code> | Determines the method and level of detail used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.numberOfAuthentications">number_of_authentications</a></code> | <code>typing.Union[int, float]</code> | The number of recent authentications used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.radiusFromLocation">radius_from_location</a></code> | <code>typing.Union[int, float]</code> | Radius from location (in kilometers). |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.status">status</a></code> | <code>str</code> | Behavior status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.velocity">velocity</a></code> | <code>typing.Union[int, float]</code> | Velocity (in kilometers per hour). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#name Behavior#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Behavior type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#type Behavior#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#id Behavior#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_granularity_type`<sup>Optional</sup> <a name="location_granularity_type" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.locationGranularityType"></a>

```python
location_granularity_type: str
```

- *Type:* str

Determines the method and level of detail used to evaluate the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#location_granularity_type Behavior#location_granularity_type}

---

##### `number_of_authentications`<sup>Optional</sup> <a name="number_of_authentications" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.numberOfAuthentications"></a>

```python
number_of_authentications: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of recent authentications used to evaluate the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#number_of_authentications Behavior#number_of_authentications}

---

##### `radius_from_location`<sup>Optional</sup> <a name="radius_from_location" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.radiusFromLocation"></a>

```python
radius_from_location: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Radius from location (in kilometers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#radius_from_location Behavior#radius_from_location}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Behavior status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#status Behavior#status}

---

##### `velocity`<sup>Optional</sup> <a name="velocity" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.velocity"></a>

```python
velocity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Velocity (in kilometers per hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/behavior#velocity Behavior#velocity}

---



